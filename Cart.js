    document.addEventListener('DOMContentLoaded', function () {
        const quantityBtns = document.querySelectorAll('.quantity-btn');
        const deleteBtns = document.querySelectorAll('.delete-btn');
        const likeBtns = document.querySelectorAll('.like-btn');
        const totalElement = document.querySelector('.total');
        const items = [
            { name: 'Jogging', price: 40 },
            { name: 'Fridge', price: 1200 },
            { name: 'Gaming Chair', price: 300 }
        ];

        function updateTotal() {
            let total = 0;
            document.querySelectorAll('.item').forEach((item, index) => {
                const quantity = parseInt(item.querySelector('span').innerText);
                total += quantity * items[index].price;
            });
            totalElement.innerText = `Total: $${total}`;
        }

        function updateQuantity(element, increment) {
            const span = element.parentElement.querySelector('span');
            let quantity = parseInt(span.innerText);

            if (increment) {
                quantity++;
            } else {
                quantity = Math.max(quantity - 1, 0);
            }

            span.innerText = quantity;
            updateTotal();
        }

        quantityBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                updateQuantity(this, this.innerText === '+');
            });
        });

        deleteBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const item = this.closest('.item');
                item.remove();
                updateTotal();
            });
        });

        likeBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        });
    });
