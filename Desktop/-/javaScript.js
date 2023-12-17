var modal = document.getElementById("myModal");

        function openModal() {
            modal.style.display = "block";
            modal.style.animation = "modalFadeIn 0.3s"; // Применяем анимацию для плавного открытия
        }

        function closeModal() {
            modal.style.animation = ""; // Убираем анимацию
            modal.style.display = "none";
        }

        // Закрытие модального окна при клике вне него
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        }