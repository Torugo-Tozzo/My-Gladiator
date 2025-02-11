# My-Gladiator
Vou fazer um jogo em RN

Os arquivos das animações Rive ficam na pasta raw do Android. Do Ios vou fazer não.
path das animações: android/app/src/main/res/raw

Comando pra gerar um apk:
cd android
./gradlew assembleRelease

Comando pra gerar aab (PlayStore):
cd android
./gradlew bundleRelease



#MECANICAS PARA IMPLEMENTAR NO JOGO
- Esquiva (a esquiva varia com a % de Agilidade do lutador).
Esquivas bem sucedidas Dão vantagem de ataque no proximo round.

- Ataque Leve (Dano baixo, esquivas são ineficazes, ataque sempre acerta se seu lutador for o mais rapido se for o mais lento e o adversario dar soco fraco voce perde e nem da dano nele).

- Ataque Pesado (Dano alto, esquivas de longe são 100% eficazes contra Socos Fortes).

- Energia/Stamina.(Ataques consomem energia/stamina, Quando acaba o lutador fica mais lento e mais vulneravel)

- Aproximar-se (Faz com que se aproxime do adversario, fazendo a % de acerto do Ataque pesado aumentar).

- Afastar-se (Vai se distanciar do Adversario, se e somente se, ele estiver proximo. Distanciar-se aumenta a % de desviar de ataques)

- Defender (Reduz o Dano tomado do ataque adversario, escala com a porcentagem de defesa do lutador).

- Especiais (Precisam que algum cenario ocorra)
Ex: Bloquear 3 ataques leves ou pesados -> Libera o especial, Ficar com 10% da vida -> Libera o especial, Acertar 3 socos fracos -> Libera o especial, etc..