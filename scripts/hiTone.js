//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toMaster();

// const app = document.getElementById('app');
const button = document.getElementById('playButton');

let index = 0;
const notes = [
  'E4', 'E4', 'D4', 'D4',
  'G5', 'G5', 'A5', 'A5'
];

const repeat = time => {
  let note = notes[index % notes.length];
  synth.triggerAttackRelease(note, '8n', time);
  index++;
};

Tone.Transport.scheduleRepeat(time => {
  repeat(time);
}, '8n');

// Default beats per minute
// Tone.Transport.bpm.value = 120;

const playSound = () => {
  button.classList.toggle('paused');
  if (button.classList.contains('paused')) {
    Tone.Transport.start();
  } else {
    Tone.Transport.pause();
  }
};

const stopSound = () => {
  button.classList = [...button.classList].filter(c => c !== 'paused');
  Tone.Transport.stop();
};