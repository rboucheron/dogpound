var success = '<div class="modal fade show montre" id="modal-content" tabindex="-1"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Votre message a été envoyé avec succès.</h5><button type="button" onclick="removemodal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div><div class="modal-body"><p> Nous avons bien reçu votre message et nous nous efforçons de traiter votre demande dans les plus brefs délais.</p> </div></div></div></div>'; 



(function() {
    // https://dashboard.emailjs.com/admin/account
    //
    emailjs.init('pGR69NPN7RPx8cgSV');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_ls0v27g', 'template_qmrlfol', this)
            .then(function() {
                document.getElementById('modal').innerHTML = success; 
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
function removemodal() {
    document.getElementById('modal-content').classList.remove('montre'); 

}