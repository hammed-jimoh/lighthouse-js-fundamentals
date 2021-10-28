const facebookProfile = {
  name: "Hammed",
  friends: 250,
  messages: [
      "Alhamdulilah for everything",
      "May Allah forgive the dead and grant them Jannah",
      "MashaAllah",
      "AllahuAkbar"
      ],
  
  postMessage: function (messages){
      return facebookProfile.messages.push("Alhamdulilah");   
  },
  deleteMessage: function (index){
    // In the following splice() method call,
    // - argument 1 = index from where the element has to be deleted
    // - argument 2 = count of elements to be deleted
      return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function (){
      return facebookProfile.friends += 1;
  },
  removeFriend: function (){
      if (facebookProfile.friends > 0)
      return facebookProfile.friends -= 1;
  }
};