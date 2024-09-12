document.getElementById('btn').addEventListener('click', () => {
    Swal.fire({
        title: "<strong>Página Desenvolvida com Express</strong>", /*nome do alerta*/
        icon: "info",
        html: "Utilizei os métodos express.static(), app.use() e app.get()" /*texto que aparecerá*/
    })
})