const propiedades_Ventas = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://img.freepik.com/fotos-premium/exterior-moderno-edificio-apartamentos-o_100656-377.jpg?w=1380",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 67678",
    habitaciones: 3,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://img.freepik.com/fotos-premium/vista-rio-janeiro_522472-13410.jpg?w=740",
    descripcion:
      " Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "760 Mountain Road, Summit Peaks, CA 2456",
    habitaciones: 3,
    costo: 1500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://img.freepik.com/foto-gratis/sala-estar-lujo-vista-al-horizonte-ciudad-ia-generativa_188544-46252.jpg?t=st=1719764948~exp=1719768548~hmac=1b929435592083e8b034d2421b5f5b78c5dc41d80ce6894cf0f04f19ef1db55a&w=2000",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "590 Skyline Avenue, Skyview City, CA 567632",
    habitaciones: 3,
    costo: 5.5,
    smoke: false,
    pets: true,
  },
];


const ventCards = document.querySelector("#ventCards");

let html = "";

for (let propiedad of propiedades_Ventas) {
  html += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${
                          propiedad.src
                        }" class="card-img-top" alt="departamento" />
                        <div class="card-body">
                            <h5 class="card-title">
                                ${propiedad.nombre}
                            </h5>
                            <p class="card-text">
                                ${propiedad.descripcion}
                            </p>
                            <p>
                                <i class="fas fa-map-marker-alt"></i> ${
                                  propiedad.ubicacion
                                }
                            </p>
                            <p>
                                <i class="fas fa-bed"></i> ${
                                  propiedad.habitaciones
                                } Habitaciones |
                            
                            </p>
                            <p>
                                <i class="fas fa-dollar-sign"></i>${
                                  propiedad.costo
                                }</p>
                            ${
                              propiedad.smoke
                                ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
                                : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
                            }
                            ${
                              propiedad.pets
                                ? `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>`
                                : `<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>`
                            }
                        </div>
                    </div>
                </div>
            `;
}
ventCards.innerHTML = html;
