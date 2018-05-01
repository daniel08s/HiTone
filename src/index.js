//create a synth and connect it to the master output (your speakers)
let synth = new Tone.Synth().toMaster();

const app = document.getElementById('app');
const button = document.getElementById('soundBtn');


function playSound() {
  synth.triggerAttackRelease("D3", "4n");
}