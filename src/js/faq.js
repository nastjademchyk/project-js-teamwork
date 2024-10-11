// import Accordion from 'accordion-js';  
// import 'accordion-js/dist/accordion.min.css';  



    document.addEventListener('DOMContentLoaded', () => {
        
        const faqItems = document.querySelectorAll('li');
        

        function closeAllElements() {
            faqItems.forEach(item => {
                const faqAnswer = item.querySelector('.faq-answer');
                const faqButton = item.querySelector('.faq-btn');
                const faqQuestion = item.querySelector('.faq-question');

                faqAnswer.classList.remove('to-reveal');
                faqButton.classList.remove('active');
                faqQuestion.classList.remove('active');
            });
        }

        faqItems.forEach((item, index) => {
            const faqAnswer = item.querySelector('.faq-answer');
            const faqButton = item.querySelector('.faq-btn');
            const faqQuestion = item.querySelector('.faq-question');
            
            faqButton.addEventListener('click', () => {
                const isActive = faqAnswer.classList.contains('to-reveal');

                if (isActive) {
                    faqAnswer.classList.remove('to-reveal');
                    faqButton.classList.remove('active');
                    faqQuestion.classList.remove('active');
                } else {
                    closeAllElements()
                    faqAnswer.classList.add('to-reveal');
                    faqButton.classList.add('active');
                    faqQuestion.classList.add('active');

                    // closeAllElementsAcord(item);
                }
            });

            if (index === 0) {
                faqAnswer.classList.add('to-reveal');
                faqButton.classList.add('active');
                // faqQuestion.classList.add('active');
                // faqAnswer.style.padding = '15px';
            }
        });

        // function closeAllElementsAcord(currentItem) {
        //     faqItems.forEach(item => {
        //     if (item !== currentItem) {
        //     const faqAnswer = item.querySelector('.faq-answer');
        //     const faqButton = item.querySelector('.faq-btn');
        //     const faqQuestion = item.querySelector('.faq-question');
            
        //     faqAnswer.classList.remove('to-reveal');
        //     faqButton.classList.remove('active');
        //     faqQuestion.classList.remove('active');
        //     }
        // });
        // }

    })
