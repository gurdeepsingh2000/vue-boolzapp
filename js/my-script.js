Vue.config.devtools = true;

new Vue (  
    {
        el: '#app', 
        data:{
            user_img: [
                        './img/avatar_1.jpg',
                        './img/avatar_2.jpg',
                        './img/avatar_3.jpg',
                        './img/avatar_4.jpg',
                        './img/avatar_5.jpg',
                        './img/avatar_6.jpg',
                        './img/avatar_7.jpg',
                        './img/avatar_8.jpg'
                        ],
                        
            contacts: [
                    {
                        name: 'Michele',
                        avatar: '_1',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                text: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: '_2',
                        visible: true,
                        messages: [
                            {
                                date: '20/03/2020 16:30:00',
                                text: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                text: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: '_3',
                        visible: true,
                        messages: [
                            {
                                date: '28/03/2020 10:10:40',
                                text: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                text: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                text: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Luisa',
                        avatar: '_4',
                        visible: true,
                        messages: [
                            {
                                date: '10/01/2020 15:30:55',
                                text: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                text: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
            ],
            actualindex: 0
            
        },
        methods:{
            user_avatar: function(index){
                return this.user_img[index]
            },
            sender: function(sent){
                if(sent === 'sent'){
                    return true
                }else{
                    return
                }
            },
            receiver: function(receive){
                if(receive ==='received'){
                    return true
                }
            }
        }
    }
)



/*
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
*/