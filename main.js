const dspet = [
    {
        ten: "Hổ Đông Dương",
        nguon: "./images/hổ/ho1.jpg",
        folder: './images/hổ',
        imgCount: 3,
        prefix: 'ho',
    },    
    {
        ten: "Voi Châu Á",
        nguon: "./images/voi/voi1.jpg",
        folder: './images/voi',
        imgCount: 3,
        prefix: 'voi',
    },
    {
        ten: "Gấu Trúc",
        nguon: "./images/gấu/gau3.jpg",
        folder: './images/gấu',
        imgCount: 3,
        prefix: 'gau',
    },
];

const hienthiDSPet = document.getElementById("petList");
const galleryContainer = document.getElementById("gallery");

dspet.forEach(pet => {
    const thepet = document.createElement("div");
    thepet.classList.add("pet-card");

    // Thay đổi nội dung hiển thị từ "Tên hoa" thành "Loài"
    thepet.innerHTML = `
    <img src = "${pet.nguon}" alt="${pet.ten}">
    <div class="pet-name">Loài: ${pet.ten}</div>
    `;

    thepet.addEventListener("click", () => {
        loadGallery(pet);
    });

    function loadGallery(pet) {
        galleryContainer.innerHTML = "";
        for (let i = 1; i <= pet.imgCount; i++) {
            const img = document.createElement("img");
            // Đường dẫn ảnh sẽ là: Folder/prefix1.jpg
            img.src = `${pet.folder}/${pet.prefix}${i}.jpg`;
            img.alt = ` ${pet.ten} ${i}`;
            galleryContainer.appendChild(img);
        }
    }

    hienthiDSPet.appendChild(thepet);
});