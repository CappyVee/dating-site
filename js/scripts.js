$(document).ready(function(){
  $("#date-form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var gender = $("input#gender").val().toLowerCase();
    var age = parseInt($("input#age").val());

    if (!name) {//check name field
      alert("Enter a name");
      $("input#name").attr("placeholder", "Enter a name");
      $("input#name").focus();
    } else if ((gender !== "female") && (gender !== "male")) {//check user gender input
      //if user input anything except female or male
      alert("Enter an actual gender");
      $("input#gender").val("");
      $("input#gender").attr("placeholder", "Female or Male");
      $("input#gender").focus();
    } else if (!age){//check if user entered age
      alert("Enter an age");
      $("input#age").attr("placeholder", "Enter age");
      $("input#age").focus();
    } else {// if name, gender, and age are entered
      if (age >= 30 && gender === "female") {
        $(".localmatches").show(500);
        $(".jumbotron").show();
        $(".profile-img").attr("src", "img/attila.jpg");
        $(".profile-title").text("Attila the Hun");
        $(".profile-text").text("In 450, Attila proclaimed his intent to attack the Visigoth kingdom of Toulouse by making an alliance with Emperor Valentinian III. He had previously been on good terms with the Western Roman Empire and its influential general Flavius Aëtius. Aëtius had spent a brief exile among the Huns in 433, and the troops that Attila provided against the Goths and Bagaudae had helped earn him the largely honorary title of magister militum in the west. The gifts and diplomatic efforts of Geiseric, who opposed and feared the Visigoths, may also have influenced Attila's plans. However, Valentinian's sister was Honoria, who had sent the Hunnish king a plea for help—and her engagement ring—in order to escape her forced betrothal to a Roman senator in the spring of 450. Honoria may not have intended a proposal of marriage, but Attila chose to interpret her message as such. He accepted, asking for half of the western Empire as dowry.");
      } else if ((18 <= age && age < 30) && gender === "female") {
        $(".localmatches").show(500);
        $(".jumbotron").show();
        $(".profile-img").attr("src", "img/achilles.jpg");
        $(".profile-title").text("Achilles the Slayer");
        $(".profile-text").text("In Greek mythology, Achilles (/əˈkɪliːz/, uh-KILL-eez; Greek: Ἀχιλλεύς [a.kʰil.le͜ús]) was a Greek hero of the Trojan War and the central character and greatest warrior of Homer's Iliad. His mother was the immortal nereid Thetis, and his father, the mortal Peleus, was the king of the Myrmidons. Achilles' most notable feat during the Trojan War was the slaying of the Trojan hero Hector outside the gates of Troy. Although the death of Achilles is not presented in the Iliad, other sources concur that he was killed near the end of the Trojan War by Paris, who shot him in the heel with an arrow. Later legends (beginning with a poem by Statius in the 1st century AD) state that Achilles was invulnerable in all of his body except for his heel. Alluding to these legends, the term \"Achilles heel\" has come to mean a point of weakness, especially in someone or something with an otherwise strong constitution.");
      } else if ((18 <= age && age < 33) && gender === "male") {
        $(".localmatches").show(500);
        $(".jumbotron").show();
        $(".profile-img").attr("src", "img/athena.jpg");
        $(".profile-title").text("Athena the Hunter");
        $(".profile-text").text("In the later writings of the Roman poet Ovid, Athena was said to have competed against the mortal Arachne in a weaving competition, afterwards transforming Arachne into the first spider; Ovid also describes how she transformed Medusa into a Gorgon after witnessing her being raped by Poseidon in her temple. Since the Renaissance, Athena has become an international symbol of wisdom and the arts. Western artists and allegorists have often used Athena as a symbol of freedom and democracy.");
      } else if (age >= 33 && gender === "male") {
        $(".localmatches").show(500);
        $(".jumbotron").show();
        $(".profile-img").attr("src", "img/elizabethbathory.png");
        $(".profile-title").text("Elizabeth the Countess");
        $(".profile-text").text("The stories of her serial murders and brutality are verified by the testimony of more than 300 witnesses and survivors as well as physical evidence and the presence of horribly mutilated dead, dying and imprisoned girls found at the time of her arrest.[6] Stories describing her vampire-like tendencies (most famously the tale that she bathed in the blood of virgins to retain her youth) were generally recorded years after her death, and are considered unreliable. Her story quickly became part of national folklore, and her infamy persists to this day.[7] She is often compared with Vlad the Impaler of Wallachia (on whom the fictional Count Dracula is partly based), having contributed some of the mythos to the Dracula legend herself.[citation needed] Nicknames and literary epithets attributed to her include The Blood Countess and Countess Dracula.");
      } else {
        alert("GET OUT OR WE'LL KILL YOU");
      }
    }
  });//Submit ends
});//end doc ready function
