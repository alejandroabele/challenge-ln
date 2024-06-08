const formatDate = (isoDate) => {
    const invalidDate = 'Fecha inválida'
    const isValidDate = isoDate && !isNaN(Date.parse(isoDate));
    return isValidDate
        ? (() => {
            const date = new Date(isoDate);

            const months = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();
            return `${day} de ${month} de ${year}`;
        })()
        : invalidDate;
}

module.exports = {
    formatDate
}