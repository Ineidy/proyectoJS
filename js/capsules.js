document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.pag');
    const buscarCapsulas = document.getElementById('capsules');

    async function fetchData() {
        const res = await fetch('https://api.spacexdata.com/v4/capsules');
        const data = await res.json();
        return data;
    }
    function displayCapsulas(capsules) {
        datosContenedor.innerHTML = ''; 
        const informacionExtraDiv = document.createElement('div');
        informacionExtraDiv.classList.add('informacionExtra');

        capsules.forEach(cap => {
            const capItem = `
                <div class="zonaIzquierda">
                    <div class="imagenVerificado">
                        <img src="storage/img/verificado.png">
                    </div>
                    <div class="seccionDatosExtras">
                        <div class="dato">
                            <h3>${cap.type}</h3>
                        </div>
                        <div class="subDato">
                            <p>${cap.id}</p>
                        </div>
                    </div>
                </div>
            `;
            informacionExtraDiv.innerHTML += capItem;
        });
        datosContenedor.appendChild(informacionExtraDiv);
        const zonaIzquierdaSeleccion = document.querySelectorAll('.zonaIzquierda');
        zonaIzquierdaSeleccion.forEach('click', async()=>{
            const capId = item.dataset.id;
            const seleccionCapsula = capsules.find(cap => cap.id === capId);
            if(seleccionCapsula){
                
            }
        })
    }
    buscarCapsulas.addEventListener('click', async () => {
        const data = await fetchData();
        displayCapsulas(data);
    });
});
