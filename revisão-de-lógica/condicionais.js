let idade = 18;
let paisPresentes = false;
let comprouBilhete = true;
// const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;

if ((idade >= 18 || paisPresentes) && comprouBilhete) {
    console.log(`Pode viajar: ${idade}, ${paisPresentes}, ${comprouBilhete}`);
}