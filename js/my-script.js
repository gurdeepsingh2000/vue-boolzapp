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
            actualindex: 0,
            add_txt:"",
            user_search:"",
            add_date: "",
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
            },
            actualUser: function(index) {
                return this.actualindex = index;
            },  

            pushMessage: function(){
                this.contacts[this.actualindex].messages.push({date: this.date_time(), text: this.add_txt, status: "sent"});
                this.add_txt = '';
                this.replyMessage()
            },     
            replyMessage: function() {
                setTimeout(() => {
                    this.date_time()
                    return this.contacts[this.actualindex].messages.push({date: this.date_time(), text: "Ok", status: "received"});
                }, 1000)
              },
              date_time:function(){
                const getTimeAndDate = dayjs()
                return getTimeAndDate.format("DD/MM/YYYY hh:mm:ss")
              },
                LastMessage_date:function(index){
                let length = ((this.contacts[index].messages).length) -1
                return this.contacts[index].messages[length].date
              }
        },
    }
)



