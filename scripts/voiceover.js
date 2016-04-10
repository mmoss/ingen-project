import { readFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { execSync } from 'child_process';
import { safeLoad } from 'js-yaml';
import { mkdirsSync, removeSync } from 'node-fs-extra';

const audioPath = join('assets', 'audio');
const voScriptPath = join('src', 'audio', 'voiceover_script.yml');
const voScript = safeLoad(readFileSync(voScriptPath, 'utf8'));

removeSync(audioPath);

function exec(cmd) {
  console.log(cmd); // eslint-disable-line
  return execSync(cmd, { cwd: '.', encoding: 'utf8' });
}

for (const [audioGroup, v] of Object.entries(voScript)) {
  for (const [audioSubGroup, audioGroupValue] of Object.entries(v)) {
    for (const [name, audio] of Object.entries(audioGroupValue)) {
      const script = audio.vo ? audio.vo : audio;
      const audioSource = join(tmpdir(), `${audioGroup}_${audioSubGroup}_${name}.m4a`);
      const outputPath = join(audioPath, audioGroup, audioSubGroup);
      mkdirsSync(outputPath);
      try {
        exec(`say  -v Samantha -o "${audioSource}" "${script}"`);
        exec(`ffmpeg -loglevel debug -y -channel_layout FC -i "${audioSource}"` +
          ` -acodec libmp3lame -q:a 3 file:"${join(outputPath, `${name}.mp3`)}"` +
          ` -acodec libvorbis -qscale:a 3 file:"${join(outputPath, `${name}.ogg`)}"`);
      } catch (err) {
        console.dir(err); // eslint-disable-line
      } finally {
        removeSync(audioSource);
      }
    }
  }
}
