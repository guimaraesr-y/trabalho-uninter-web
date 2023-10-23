const imagens = [
    "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png",
    "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
    "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
    "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png",
    "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704",
    "https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png",
    "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
    "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png",
    "https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png",
    "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
    "https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png",
    "https://github.com/marwin1991/profile-technology-icons/assets/25181517/afcf1c98-544e-41fb-bf44-edba5e62809a",
    "https://user-images.githubusercontent.com/25181517/186884156-e63da389-f3e1-4dca-a6c1-d76e886ba22a.png"
];

function toggleNavbarMenu() {
    const headerLinks = document.getElementById("header-links");
    headerLinks.classList.toggle("show");
}

let index = 0;
const interval = 500;

function mostrarProximaImagem() {
    const imagemElement = document.getElementById("imagem");
    imagemElement.classList.remove("show"); // remove a classe "show" para tornar a imagem opaca
    
    setTimeout(() => {
        index++; // incrementa o índice para obter a próxima imagem

        if (index >= imagens.length) {
            index = 0; // reinicia o índice se todas as imagens já foram exibidas
        }

        const novaImagem = imagens[index];

        imagemElement.src = novaImagem;
        imagemElement.classList.add("show"); // adiciona a classe "show" para tornar a imagem visível
        
        setTimeout(mostrarProximaImagem, interval); // chama a função novamente após o intervalo de tempo

    }, interval); // tempo de atraso antes de mudar para a próxima imagem (500 milissegundos)
}

window.onload = mostrarProximaImagem;