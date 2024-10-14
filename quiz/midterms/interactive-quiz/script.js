$(document).ready(function() {
    const correctAnswers = {
        question1: 'B',
        question2: 'B',
        question3: 'C',
        question4: 'A'
    };

    let totalQuestions = 4;
    let answeredQuestions = 0;

    // Function to update progress bar in real-time
    function updateProgressBar() {
        let progressPercentage = (answeredQuestions / totalQuestions) * 100;
        $('#progress').css('width', progressPercentage + '%');
    }

    // Update answeredQuestions count and progress bar dynamically when user selects an answer
    $("input[type='radio']").on('change', function() {
        // Check if all options for this question have been answered
        let questionName = $(this).attr('name');
        let questionAnswered = $(`input[name='${questionName}']:checked`).length > 0;

        // Increment answeredQuestions only if it's the first time answering this question
        if (questionAnswered && !$(`input[name='${questionName}']`).hasClass('answered')) {
            answeredQuestions++;
            $(`input[name='${questionName}']`).addClass('answered');  // Mark this question as answered
        }

        // Update the progress bar in real-time
        updateProgressBar();
    });

    // Validate the form before submission
    function validateForm() {
        let isValid = true;
        let name = $('#name').val().trim();
        let email = $('#email').val().trim();

        if (name === '' || email === '') {
            alert('Please fill out your name and email.');
            isValid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Ensure all questions are answered
        if (answeredQuestions < totalQuestions) {
            alert('Please answer all the questions.');
            isValid = false;
        }

        return isValid;
    }

    // Submit the quiz and calculate the score
    $('#quizForm').on('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Show name on the top
            $('#displayName').text($('#name').val());
            $('#nameDisplay').removeClass('hidden');

            // Calculate the score
            let score = 0;
            let feedbackHTML = '';

            // Check each question's answer
            for (let i = 1; i <= totalQuestions; i++) {
                let selectedAnswer = $(`input[name="question${i}"]:checked`).val();
                if (selectedAnswer === correctAnswers[`question${i}`]) {
                    score++;
                    feedbackHTML += `<p class="correct">Question ${i}: Correct!</p>`;
                } else {
                    feedbackHTML += `<p class="incorrect">Question ${i}: Incorrect. The correct answer is ${correctAnswers[`question${i}`]}.</p>`;
                }
            }

            // Show the score and feedback
            $('#scoreMessage').text(`You scored ${score} out of ${totalQuestions}`);
            $('#feedback').html(feedbackHTML);

            // Hide the quiz form and show the results
            $('#quizForm').addClass('hidden');
            $('#resultSection').removeClass('hidden');
        }
    });
});