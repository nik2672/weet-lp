// expandable/collapsible faq card
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-pair');

    faqItems.forEach(pair => {
        const question = pair.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // close other pairs
            faqItems.forEach(otherItem => {
                if (otherItem !== pair && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // toggle current pair
            pair.classList.toggle('active');
        });
    });
});
