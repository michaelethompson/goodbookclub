'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.795a78ba-50f7-4993-bebb-677f7391ccb0'

var jsonContent = [{
        "bookname": "Luke",
        "chapter": "1",
        "verse": "1",
        "text": "Since many have undertaken to set down an orderly account of the events that have been fulfilled among us, ",
        "headerReference": "en-NRSV-24887",
        "title": "\nDedication to Theophilus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "2",
        "text": "just as they were handed on to us by those who from the beginning were eyewitnesses and servants of the word, ",
        "reference": "en-NRSV-24888",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "3",
        "text": "I too decided, after investigating everything carefully from the very first, to write an orderly account for you, most excellent Theophilus, ",
        "reference": "en-NRSV-24889",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "4",
        "text": "so that you may know the truth concerning the things about which you have been instructed.",
        "reference": "en-NRSV-24890",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "5",
        "text": "\nIn the days of King Herod of Judea, there was a priest named Zechariah, who belonged to the priestly order of Abijah. His wife was a descendant of Aaron, and her name was Elizabeth. \n",
        "headerReference": "en-NRSV-24891",
        "title": "\nThe Birth of John the Baptist Foretold\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "6",
        "text": "Both of them were righteous before God, living blamelessly according to all the commandments and regulations of the Lord. ",
        "reference": "en-NRSV-24892",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "7",
        "text": "But they had no children, because Elizabeth was barren, and both were getting on in years.",
        "reference": "en-NRSV-24893",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "8",
        "text": "Once when he was serving as priest before God and his section was on duty, ",
        "reference": "en-NRSV-24894",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "9",
        "text": "he was chosen by lot, according to the custom of the priesthood, to enter the sanctuary of the Lord and offer incense. ",
        "reference": "en-NRSV-24895",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "10",
        "text": "Now at the time of the incense offering, the whole assembly of the people was praying outside. ",
        "reference": "en-NRSV-24896",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "11",
        "text": "Then there appeared to him an angel of the Lord, standing at the right side of the altar of incense. ",
        "reference": "en-NRSV-24897",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "12",
        "text": "When Zechariah saw him, he was terrified; and fear overwhelmed him. ",
        "reference": "en-NRSV-24898",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "13",
        "text": "But the angel said to him, “Do not be afraid, Zechariah, for your prayer has been heard. Your wife Elizabeth will bear you a son, and you will name him John. ",
        "reference": "en-NRSV-24899",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "14",
        "text": "You will have joy and gladness, and many will rejoice at his birth, ",
        "reference": "en-NRSV-24900",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "15",
        "text": "for he will be great in the sight of the Lord. He must never drink wine or strong drink; even before his birth he will be filled with the Holy Spirit. ",
        "reference": "en-NRSV-24901",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "16",
        "text": "He will turn many of the people of Israel to the Lord their God. ",
        "reference": "en-NRSV-24902",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "17",
        "text": "With the spirit and power of Elijah he will go before him, to turn the hearts of parents to their children, and the disobedient to the wisdom of the righteous, to make ready a people prepared for the Lord.” ",
        "reference": "en-NRSV-24903",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "18",
        "text": "Zechariah said to the angel, “How will I know that this is so? For I am an old man, and my wife is getting on in years.” ",
        "reference": "en-NRSV-24904",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "19",
        "text": "The angel replied, “I am Gabriel. I stand in the presence of God, and I have been sent to speak to you and to bring you this good news. ",
        "reference": "en-NRSV-24905",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "20",
        "text": "But now, because you did not believe my words, which will be fulfilled in their time, you will become mute, unable to speak, until the day these things occur.”",
        "reference": "en-NRSV-24906",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "21",
        "text": "Meanwhile the people were waiting for Zechariah, and wondered at his delay in the sanctuary. ",
        "reference": "en-NRSV-24907",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "22",
        "text": "When he did come out, he could not speak to them, and they realized that he had seen a vision in the sanctuary. He kept motioning to them and remained unable to speak. ",
        "reference": "en-NRSV-24908",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "23",
        "text": "When his time of service was ended, he went to his home.",
        "reference": "en-NRSV-24909",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "24",
        "text": "After those days his wife Elizabeth conceived, and for five months she remained in seclusion. She said, ",
        "reference": "en-NRSV-24910",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "25",
        "text": "“This is what the Lord has done for me when he looked favorably on me and took away the disgrace I have endured among my people.”",
        "reference": "en-NRSV-24911",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "26",
        "text": "\nIn the sixth month the angel Gabriel was sent by God to a town in Galilee called Nazareth, \n",
        "headerReference": "en-NRSV-24912",
        "title": "\nThe Birth of Jesus Foretold\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "27",
        "text": "to a virgin engaged to a man whose name was Joseph, of the house of David. The virgin’s name was Mary. ",
        "reference": "en-NRSV-24913",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "28",
        "text": "And he came to her and said, “Greetings, favored one! The Lord is with you.” ",
        "reference": "en-NRSV-24914",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "29",
        "text": "But she was much perplexed by his words and pondered what sort of greeting this might be. ",
        "reference": "en-NRSV-24915",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "30",
        "text": "The angel said to her, “Do not be afraid, Mary, for you have found favor with God. ",
        "reference": "en-NRSV-24916",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "31",
        "text": "And now, you will conceive in your womb and bear a son, and you will name him Jesus. ",
        "reference": "en-NRSV-24917",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "32",
        "text": "He will be great, and will be called the Son of the Most High, and the Lord God will give to him the throne of his ancestor David. ",
        "reference": "en-NRSV-24918",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "33",
        "text": "He will reign over the house of Jacob forever, and of his kingdom there will be no end.” ",
        "reference": "en-NRSV-24919",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "34",
        "text": "Mary said to the angel, “How can this be, since I am a virgin?” ",
        "reference": "en-NRSV-24920",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "35",
        "text": "The angel said to her, “The Holy Spirit will come upon you, and the power of the Most High will overshadow you; therefore the child to be born will be holy; he will be called Son of God. ",
        "reference": "en-NRSV-24921",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "36",
        "text": "And now, your relative Elizabeth in her old age has also conceived a son; and this is the sixth month for her who was said to be barren. ",
        "reference": "en-NRSV-24922",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "37",
        "text": "For nothing will be impossible with God.” ",
        "reference": "en-NRSV-24923",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "38",
        "text": "Then Mary said, “Here am I, the servant of the Lord; let it be with me according to your word.” Then the angel departed from her.",
        "reference": "en-NRSV-24924",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "39",
        "text": "\nIn those days Mary set out and went with haste to a Judean town in the hill country, \n",
        "headerReference": "en-NRSV-24925",
        "title": "\nMary Visits Elizabeth\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "40",
        "text": "where she entered the house of Zechariah and greeted Elizabeth. ",
        "reference": "en-NRSV-24926",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "41",
        "text": "When Elizabeth heard Mary’s greeting, the child leaped in her womb. And Elizabeth was filled with the Holy Spirit ",
        "reference": "en-NRSV-24927",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "42",
        "text": "and exclaimed with a loud cry, “Blessed are you among women, and blessed is the fruit of your womb. ",
        "reference": "en-NRSV-24928",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "43",
        "text": "And why has this happened to me, that the mother of my Lord comes to me? ",
        "reference": "en-NRSV-24929",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "44",
        "text": "For as soon as I heard the sound of your greeting, the child in my womb leaped for joy. ",
        "reference": "en-NRSV-24930",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "45",
        "text": "And blessed is she who believed that there would be a fulfillment of what was spoken to her by the Lord.”",
        "reference": "en-NRSV-24931",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "46",
        "text": "\nAnd Mary said,\n \n“My soul magnifies the Lord,\n",
        "headerReference": "en-NRSV-24932",
        "title": "\nMary’s Song of Praise\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "47",
        "text": "\nand my spirit rejoices in God my Savior,",
        "reference": "en-NRSV-24933",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "48",
        "text": "for he has looked with favor on the lowliness of his servant.     \nSurely, from now on all generations will call me blessed;\n",
        "reference": "en-NRSV-24934",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "49",
        "text": "for the Mighty One has done great things for me,     \nand holy is his name.\n",
        "reference": "en-NRSV-24935",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "50",
        "text": "His mercy is for those who fear him     \nfrom generation to generation.\n",
        "reference": "en-NRSV-24936",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "51",
        "text": "He has shown strength with his arm;     \nhe has scattered the proud in the thoughts of their hearts.\n",
        "reference": "en-NRSV-24937",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "52",
        "text": "He has brought down the powerful from their thrones,     \nand lifted up the lowly;\n",
        "reference": "en-NRSV-24938",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "53",
        "text": "he has filled the hungry with good things,     \nand sent the rich away empty.\n",
        "reference": "en-NRSV-24939",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "54",
        "text": "He has helped his servant Israel,     \nin remembrance of his mercy,\n",
        "reference": "en-NRSV-24940",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "55",
        "text": "according to the promise he made to our ancestors,     \nto Abraham and to his descendants forever.”\n",
        "reference": "en-NRSV-24941",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "56",
        "text": "And Mary remained with her about three months and then returned to her home.",
        "reference": "en-NRSV-24942",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "57",
        "text": "\nNow the time came for Elizabeth to give birth, and she bore a son. \n",
        "headerReference": "en-NRSV-24943",
        "title": "\nThe Birth of John the Baptist\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "58",
        "text": "Her neighbors and relatives heard that the Lord had shown his great mercy to her, and they rejoiced with her.",
        "reference": "en-NRSV-24944",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "59",
        "text": "On the eighth day they came to circumcise the child, and they were going to name him Zechariah after his father. ",
        "reference": "en-NRSV-24945",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "60",
        "text": "But his mother said, “No; he is to be called John.” ",
        "reference": "en-NRSV-24946",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "61",
        "text": "They said to her, “None of your relatives has this name.” ",
        "reference": "en-NRSV-24947",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "62",
        "text": "Then they began motioning to his father to find out what name he wanted to give him. ",
        "reference": "en-NRSV-24948",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "63",
        "text": "He asked for a writing tablet and wrote, “His name is John.” And all of them were amazed. ",
        "reference": "en-NRSV-24949",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "64",
        "text": "Immediately his mouth was opened and his tongue freed, and he began to speak, praising God. ",
        "reference": "en-NRSV-24950",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "65",
        "text": "Fear came over all their neighbors, and all these things were talked about throughout the entire hill country of Judea. ",
        "reference": "en-NRSV-24951",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "66",
        "text": "All who heard them pondered them and said, “What then will this child become?” For, indeed, the hand of the Lord was with him.",
        "reference": "en-NRSV-24952",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "67",
        "text": "\nThen his father Zechariah was filled with the Holy Spirit and spoke this prophecy:\n",
        "headerReference": "en-NRSV-24953",
        "title": "\nZechariah’s Prophecy\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "68",
        "text": "“Blessed be the Lord God of Israel,     \nfor he has looked favorably on his people and redeemed them.\n",
        "reference": "en-NRSV-24954",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "69",
        "text": "He has raised up a mighty savior for us     \nin the house of his servant David,\n",
        "reference": "en-NRSV-24955",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "70",
        "text": "as he spoke through the mouth of his holy prophets from of old,",
        "reference": "en-NRSV-24956",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "71",
        "text": "\nthat we would be saved from our enemies and from the hand of all who hate us.",
        "reference": "en-NRSV-24957",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "72",
        "text": "Thus he has shown the mercy promised to our ancestors,     \nand has remembered his holy covenant,\n",
        "reference": "en-NRSV-24958",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "73",
        "text": "the oath that he swore to our ancestor Abraham,     \nto grant us \n",
        "reference": "en-NRSV-24959",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "74",
        "text": "that we, being rescued from the hands of our enemies, \nmight serve him without fear, \n",
        "reference": "en-NRSV-24960",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "75",
        "text": "in holiness and righteousness     \nbefore him all our days.\n",
        "reference": "en-NRSV-24961",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "76",
        "text": "And you, child, will be called the prophet of the Most High;     \nfor you will go before the Lord to prepare his ways,\n",
        "reference": "en-NRSV-24962",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "77",
        "text": "to give knowledge of salvation to his people     \nby the forgiveness of their sins.\n",
        "reference": "en-NRSV-24963",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "78",
        "text": "By the tender mercy of our God,     \nthe dawn from on high will break upon us,\n",
        "reference": "en-NRSV-24964",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "79",
        "text": "to give light to those who sit in darkness and in the shadow of death,     \nto guide our feet into the way of peace.”\n",
        "reference": "en-NRSV-24965",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "1",
        "verse": "80",
        "text": "The child grew and became strong in spirit, and he was in the wilderness until the day he appeared publicly to Israel.",
        "reference": "en-NRSV-24966",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "1",
        "text": "In those days a decree went out from Emperor Augustus that all the world should be registered. ",
        "headerReference": "en-NRSV-24967",
        "title": "\nThe Birth of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "2",
        "text": "This was the first registration and was taken while Quirinius was governor of Syria. ",
        "reference": "en-NRSV-24968",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "3",
        "text": "All went to their own towns to be registered. ",
        "reference": "en-NRSV-24969",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "4",
        "text": "Joseph also went from the town of Nazareth in Galilee to Judea, to the city of David called Bethlehem, because he was descended from the house and family of David. ",
        "reference": "en-NRSV-24970",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "5",
        "text": "He went to be registered with Mary, to whom he was engaged and who was expecting a child. ",
        "reference": "en-NRSV-24971",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "6",
        "text": "While they were there, the time came for her to deliver her child. ",
        "reference": "en-NRSV-24972",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "7",
        "text": "And she gave birth to her firstborn son and wrapped him in bands of cloth, and laid him in a manger, because there was no place for them in the inn.",
        "reference": "en-NRSV-24973",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "8",
        "text": "\nIn that region there were shepherds living in the fields, keeping watch over their flock by night. \n",
        "headerReference": "en-NRSV-24974",
        "title": "\nThe Shepherds and the Angels\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "9",
        "text": "Then an angel of the Lord stood before them, and the glory of the Lord shone around them, and they were terrified. ",
        "reference": "en-NRSV-24975",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "10",
        "text": "But the angel said to them, “Do not be afraid; for see—I am bringing you good news of great joy for all the people: ",
        "reference": "en-NRSV-24976",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "11",
        "text": "to you is born this day in the city of David a Savior, who is the Messiah, the Lord. ",
        "reference": "en-NRSV-24977",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "12",
        "text": "This will be a sign for you: you will find a child wrapped in bands of cloth and lying in a manger.” ",
        "reference": "en-NRSV-24978",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "13",
        "text": "And suddenly there was with the angel a multitude of the heavenly host, praising God and saying,",
        "reference": "en-NRSV-24979",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "14",
        "text": "“Glory to God in the highest heaven,     \nand on earth peace among those whom he favors!”\n",
        "reference": "en-NRSV-24980",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "15",
        "text": "When the angels had left them and gone into heaven, the shepherds said to one another, “Let us go now to Bethlehem and see this thing that has taken place, which the Lord has made known to us.” ",
        "reference": "en-NRSV-24981",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "16",
        "text": "So they went with haste and found Mary and Joseph, and the child lying in the manger. ",
        "reference": "en-NRSV-24982",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "17",
        "text": "When they saw this, they made known what had been told them about this child; ",
        "reference": "en-NRSV-24983",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "18",
        "text": "and all who heard it were amazed at what the shepherds told them. ",
        "reference": "en-NRSV-24984",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "19",
        "text": "But Mary treasured all these words and pondered them in her heart. ",
        "reference": "en-NRSV-24985",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "20",
        "text": "The shepherds returned, glorifying and praising God for all they had heard and seen, as it had been told them.",
        "reference": "en-NRSV-24986",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "21",
        "text": "\nAfter eight days had passed, it was time to circumcise the child; and he was called Jesus, the name given by the angel before he was conceived in the womb.\n",
        "headerReference": "en-NRSV-24987",
        "title": "\nJesus Is Named\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "22",
        "text": "\nWhen the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord \n",
        "headerReference": "en-NRSV-24988",
        "title": "\nJesus Is Presented in the Temple\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "23",
        "text": "(as it is written in the law of the Lord, “Every firstborn male shall be designated as holy to the Lord”), ",
        "reference": "en-NRSV-24989",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "24",
        "text": "and they offered a sacrifice according to what is stated in the law of the Lord, “a pair of turtledoves or two young pigeons.”",
        "reference": "en-NRSV-24990",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "25",
        "text": "Now there was a man in Jerusalem whose name was Simeon; this man was righteous and devout, looking forward to the consolation of Israel, and the Holy Spirit rested on him. ",
        "reference": "en-NRSV-24991",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "26",
        "text": "It had been revealed to him by the Holy Spirit that he would not see death before he had seen the Lord’s Messiah. ",
        "reference": "en-NRSV-24992",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "27",
        "text": "Guided by the Spirit, Simeon came into the temple; and when the parents brought in the child Jesus, to do for him what was customary under the law, ",
        "reference": "en-NRSV-24993",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "28",
        "text": "Simeon took him in his arms and praised God, saying,",
        "reference": "en-NRSV-24994",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "29",
        "text": "“Master, now you are dismissing your servant in peace,     \naccording to your word;\n",
        "reference": "en-NRSV-24995",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "30",
        "text": "for my eyes have seen your salvation,",
        "reference": "en-NRSV-24996",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "31",
        "text": "\nwhich you have prepared in the presence of all peoples,",
        "reference": "en-NRSV-24997",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "32",
        "text": "a light for revelation to the Gentiles     \nand for glory to your people Israel.”\n",
        "reference": "en-NRSV-24998",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "33",
        "text": "And the child’s father and mother were amazed at what was being said about him. ",
        "reference": "en-NRSV-24999",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "34",
        "text": "Then Simeon blessed them and said to his mother Mary, “This child is destined for the falling and the rising of many in Israel, and to be a sign that will be opposed ",
        "reference": "en-NRSV-25000",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "35",
        "text": "so that the inner thoughts of many will be revealed—and a sword will pierce your own soul too.”",
        "reference": "en-NRSV-25001",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "36",
        "text": "There was also a prophet, Anna the daughter of Phanuel, of the tribe of Asher. She was of a great age, having lived with her husband seven years after her marriage, ",
        "reference": "en-NRSV-25002",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "37",
        "text": "then as a widow to the age of eighty-four. She never left the temple but worshiped there with fasting and prayer night and day. ",
        "reference": "en-NRSV-25003",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "38",
        "text": "At that moment she came, and began to praise God and to speak about the child to all who were looking for the redemption of Jerusalem.",
        "reference": "en-NRSV-25004",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "39",
        "text": "\nWhen they had finished everything required by the law of the Lord, they returned to Galilee, to their own town of Nazareth. \n",
        "headerReference": "en-NRSV-25005",
        "title": "\nThe Return to Nazareth\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "40",
        "text": "The child grew and became strong, filled with wisdom; and the favor of God was upon him.",
        "reference": "en-NRSV-25006",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "41",
        "text": "\nNow every year his parents went to Jerusalem for the festival of the Passover. \n",
        "headerReference": "en-NRSV-25007",
        "title": "\nThe Boy Jesus in the Temple\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "42",
        "text": "And when he was twelve years old, they went up as usual for the festival. ",
        "reference": "en-NRSV-25008",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "43",
        "text": "When the festival was ended and they started to return, the boy Jesus stayed behind in Jerusalem, but his parents did not know it. ",
        "reference": "en-NRSV-25009",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "44",
        "text": "Assuming that he was in the group of travelers, they went a day’s journey. Then they started to look for him among their relatives and friends. ",
        "reference": "en-NRSV-25010",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "45",
        "text": "When they did not find him, they returned to Jerusalem to search for him. ",
        "reference": "en-NRSV-25011",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "46",
        "text": "After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions. ",
        "reference": "en-NRSV-25012",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "47",
        "text": "And all who heard him were amazed at his understanding and his answers. ",
        "reference": "en-NRSV-25013",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "48",
        "text": "When his parents saw him they were astonished; and his mother said to him, “Child, why have you treated us like this? Look, your father and I have been searching for you in great anxiety.” ",
        "reference": "en-NRSV-25014",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "49",
        "text": "He said to them, “Why were you searching for me? Did you not know that I must be in my Father’s house?” ",
        "reference": "en-NRSV-25015",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "50",
        "text": "But they did not understand what he said to them. ",
        "reference": "en-NRSV-25016",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "51",
        "text": "Then he went down with them and came to Nazareth, and was obedient to them. His mother treasured all these things in her heart.",
        "reference": "en-NRSV-25017",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "2",
        "verse": "52",
        "text": "And Jesus increased in wisdom and in years, and in divine and human favor.",
        "reference": "en-NRSV-25018",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "1",
        "text": "In the fifteenth year of the reign of Emperor Tiberius, when Pontius Pilate was governor of Judea, and Herod was ruler of Galilee, and his brother Philip ruler of the region of Ituraea and Trachonitis, and Lysanias ruler of Abilene, ",
        "headerReference": "en-NRSV-25019",
        "title": "\nThe Proclamation of John the Baptist\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "2",
        "text": "during the high priesthood of Annas and Caiaphas, the word of God came to John son of Zechariah in the wilderness. ",
        "reference": "en-NRSV-25020",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "3",
        "text": "He went into all the region around the Jordan, proclaiming a baptism of repentance for the forgiveness of sins, ",
        "reference": "en-NRSV-25021",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "4",
        "text": "as it is written in the book of the words of the prophet Isaiah, \n“The voice of one crying out in the wilderness:\n \n‘Prepare the way of the Lord,    \n \nmake his paths straight.\n",
        "reference": "en-NRSV-25022",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "5",
        "text": "Every valley shall be filled,     \nand every mountain and hill shall be made low,\n \nand the crooked shall be made straight,    \n \nand the rough ways made smooth;\n",
        "reference": "en-NRSV-25023",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "6",
        "text": "and all flesh shall see the salvation of God.’”",
        "reference": "en-NRSV-25024",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "7",
        "text": "John said to the crowds that came out to be baptized by him, “You brood of vipers! Who warned you to flee from the wrath to come? ",
        "reference": "en-NRSV-25025",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "8",
        "text": "Bear fruits worthy of repentance. Do not begin to say to yourselves, ‘We have Abraham as our ancestor’; for I tell you, God is able from these stones to raise up children to Abraham. ",
        "reference": "en-NRSV-25026",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "9",
        "text": "Even now the ax is lying at the root of the trees; every tree therefore that does not bear good fruit is cut down and thrown into the fire.”",
        "reference": "en-NRSV-25027",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "10",
        "text": "And the crowds asked him, “What then should we do?” ",
        "reference": "en-NRSV-25028",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "11",
        "text": "In reply he said to them, “Whoever has two coats must share with anyone who has none; and whoever has food must do likewise.” ",
        "reference": "en-NRSV-25029",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "12",
        "text": "Even tax collectors came to be baptized, and they asked him, “Teacher, what should we do?” ",
        "reference": "en-NRSV-25030",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "13",
        "text": "He said to them, “Collect no more than the amount prescribed for you.” ",
        "reference": "en-NRSV-25031",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "14",
        "text": "Soldiers also asked him, “And we, what should we do?” He said to them, “Do not extort money from anyone by threats or false accusation, and be satisfied with your wages.”",
        "reference": "en-NRSV-25032",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "15",
        "text": "As the people were filled with expectation, and all were questioning in their hearts concerning John, whether he might be the Messiah, ",
        "reference": "en-NRSV-25033",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "16",
        "text": "John answered all of them by saying, “I baptize you with water; but one who is more powerful than I is coming; I am not worthy to untie the thong of his sandals. He will baptize you with the Holy Spirit and fire. ",
        "reference": "en-NRSV-25034",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "17",
        "text": "His winnowing fork is in his hand, to clear his threshing floor and to gather the wheat into his granary; but the chaff he will burn with unquenchable fire.”",
        "reference": "en-NRSV-25035",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "18",
        "text": "So, with many other exhortations, he proclaimed the good news to the people. ",
        "reference": "en-NRSV-25036",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "19",
        "text": "But Herod the ruler, who had been rebuked by him because of Herodias, his brother’s wife, and because of all the evil things that Herod had done, ",
        "reference": "en-NRSV-25037",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "20",
        "text": "added to them all by shutting up John in prison.",
        "reference": "en-NRSV-25038",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "21",
        "text": "\nNow when all the people were baptized, and when Jesus also had been baptized and was praying, the heaven was opened, \n",
        "headerReference": "en-NRSV-25039",
        "title": "\nThe Baptism of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "22",
        "text": "and the Holy Spirit descended upon him in bodily form like a dove. And a voice came from heaven, “You are my Son, the Beloved; with you I am well pleased.”",
        "reference": "en-NRSV-25040",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "23",
        "text": "\nJesus was about thirty years old when he began his work. He was the son (as was thought) of Joseph son of Heli, \n",
        "headerReference": "en-NRSV-25041",
        "title": "\nThe Ancestors of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "24",
        "text": "son of Matthat, son of Levi, son of Melchi, son of Jannai, son of Joseph, ",
        "reference": "en-NRSV-25042",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "25",
        "text": "son of Mattathias, son of Amos, son of Nahum, son of Esli, son of Naggai, ",
        "reference": "en-NRSV-25043",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "26",
        "text": "son of Maath, son of Mattathias, son of Semein, son of Josech, son of Joda, ",
        "reference": "en-NRSV-25044",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "27",
        "text": "son of Joanan, son of Rhesa, son of Zerubbabel, son of Shealtiel, son of Neri, ",
        "reference": "en-NRSV-25045",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "28",
        "text": "son of Melchi, son of Addi, son of Cosam, son of Elmadam, son of Er, ",
        "reference": "en-NRSV-25046",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "29",
        "text": "son of Joshua, son of Eliezer, son of Jorim, son of Matthat, son of Levi, ",
        "reference": "en-NRSV-25047",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "30",
        "text": "son of Simeon, son of Judah, son of Joseph, son of Jonam, son of Eliakim, ",
        "reference": "en-NRSV-25048",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "31",
        "text": "son of Melea, son of Menna, son of Mattatha, son of Nathan, son of David, ",
        "reference": "en-NRSV-25049",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "32",
        "text": "son of Jesse, son of Obed, son of Boaz, son of Sala, son of Nahshon, ",
        "reference": "en-NRSV-25050",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "33",
        "text": "son of Amminadab, son of Admin, son of Arni, son of Hezron, son of Perez, son of Judah, ",
        "reference": "en-NRSV-25051",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "34",
        "text": "son of Jacob, son of Isaac, son of Abraham, son of Terah, son of Nahor, ",
        "reference": "en-NRSV-25052",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "35",
        "text": "son of Serug, son of Reu, son of Peleg, son of Eber, son of Shelah, ",
        "reference": "en-NRSV-25053",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "36",
        "text": "son of Cainan, son of Arphaxad, son of Shem, son of Noah, son of Lamech, ",
        "reference": "en-NRSV-25054",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "37",
        "text": "son of Methuselah, son of Enoch, son of Jared, son of Mahalaleel, son of Cainan, ",
        "reference": "en-NRSV-25055",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "3",
        "verse": "38",
        "text": "son of Enos, son of Seth, son of Adam, son of God.",
        "reference": "en-NRSV-25056",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "1",
        "text": "Jesus, full of the Holy Spirit, returned from the Jordan and was led by the Spirit in the wilderness, ",
        "headerReference": "en-NRSV-25057",
        "title": "\nThe Temptation of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "2",
        "text": "where for forty days he was tempted by the devil. He ate nothing at all during those days, and when they were over, he was famished. ",
        "reference": "en-NRSV-25058",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "3",
        "text": "The devil said to him, “If you are the Son of God, command this stone to become a loaf of bread.” ",
        "reference": "en-NRSV-25059",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "4",
        "text": "Jesus answered him, “It is written, ‘One does not live by bread alone.’”",
        "reference": "en-NRSV-25060",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "5",
        "text": "Then the devil led him up and showed him in an instant all the kingdoms of the world. ",
        "reference": "en-NRSV-25061",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "6",
        "text": "And the devil said to him, “To you I will give their glory and all this authority; for it has been given over to me, and I give it to anyone I please. ",
        "reference": "en-NRSV-25062",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "7",
        "text": "If you, then, will worship me, it will all be yours.” ",
        "reference": "en-NRSV-25063",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "8",
        "text": "Jesus answered him, “It is written, \n‘Worship the Lord your God,    \n \nand serve only him.’”\n",
        "reference": "en-NRSV-25064",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "9",
        "text": "Then the devil took him to Jerusalem, and placed him on the pinnacle of the temple, saying to him, “If you are the Son of God, throw yourself down from here, ",
        "reference": "en-NRSV-25065",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "10",
        "text": "for it is written, \n‘He will command his angels concerning you,    \n \nto protect you,’\n",
        "reference": "en-NRSV-25066",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "11",
        "text": "and \n‘On their hands they will bear you up,    \n \nso that you will not dash your foot against a stone.’”\n",
        "reference": "en-NRSV-25067",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "12",
        "text": "Jesus answered him, “It is said, ‘Do not put the Lord your God to the test.’” ",
        "reference": "en-NRSV-25068",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "13",
        "text": "When the devil had finished every test, he departed from him until an opportune time.",
        "reference": "en-NRSV-25069",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "14",
        "text": "\nThen Jesus, filled with the power of the Spirit, returned to Galilee, and a report about him spread through all the surrounding country. \n",
        "headerReference": "en-NRSV-25070",
        "title": "\nThe Beginning of the Galilean Ministry\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "15",
        "text": "He began to teach in their synagogues and was praised by everyone.",
        "reference": "en-NRSV-25071",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "16",
        "text": "\nWhen he came to Nazareth, where he had been brought up, he went to the synagogue on the sabbath day, as was his custom. He stood up to read, \n",
        "headerReference": "en-NRSV-25072",
        "title": "\nThe Rejection of Jesus at Nazareth\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "17",
        "text": "and the scroll of the prophet Isaiah was given to him. He unrolled the scroll and found the place where it was written:",
        "reference": "en-NRSV-25073",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "18",
        "text": "“The Spirit of the Lord is upon me,     \nbecause he has anointed me\n \nto bring good news to the poor.\n \nHe has sent me to proclaim release to the captives    \n \nand recovery of sight to the blind,\n \nto let the oppressed go free,\n",
        "reference": "en-NRSV-25074",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "19",
        "text": "to proclaim the year of the Lord’s favor.”",
        "reference": "en-NRSV-25075",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "20",
        "text": "And he rolled up the scroll, gave it back to the attendant, and sat down. The eyes of all in the synagogue were fixed on him. ",
        "reference": "en-NRSV-25076",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "21",
        "text": "Then he began to say to them, “Today this scripture has been fulfilled in your hearing.” ",
        "reference": "en-NRSV-25077",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "22",
        "text": "All spoke well of him and were amazed at the gracious words that came from his mouth. They said, “Is not this Joseph’s son?” ",
        "reference": "en-NRSV-25078",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "23",
        "text": "He said to them, “Doubtless you will quote to me this proverb, ‘Doctor, cure yourself!’ And you will say, ‘Do here also in your hometown the things that we have heard you did at Capernaum.’” ",
        "reference": "en-NRSV-25079",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "24",
        "text": "And he said, “Truly I tell you, no prophet is accepted in the prophet’s hometown. ",
        "reference": "en-NRSV-25080",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "25",
        "text": "But the truth is, there were many widows in Israel in the time of Elijah, when the heaven was shut up three years and six months, and there was a severe famine over all the land; ",
        "reference": "en-NRSV-25081",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "26",
        "text": "yet Elijah was sent to none of them except to a widow at Zarephath in Sidon. ",
        "reference": "en-NRSV-25082",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "27",
        "text": "There were also many lepers in Israel in the time of the prophet Elisha, and none of them was cleansed except Naaman the Syrian.” ",
        "reference": "en-NRSV-25083",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "28",
        "text": "When they heard this, all in the synagogue were filled with rage. ",
        "reference": "en-NRSV-25084",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "29",
        "text": "They got up, drove him out of the town, and led him to the brow of the hill on which their town was built, so that they might hurl him off the cliff. ",
        "reference": "en-NRSV-25085",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "30",
        "text": "But he passed through the midst of them and went on his way.",
        "reference": "en-NRSV-25086",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "31",
        "text": "\nHe went down to Capernaum, a city in Galilee, and was teaching them on the sabbath. \n",
        "headerReference": "en-NRSV-25087",
        "title": "\nThe Man with an Unclean Spirit\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "32",
        "text": "They were astounded at his teaching, because he spoke with authority. ",
        "reference": "en-NRSV-25088",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "33",
        "text": "In the synagogue there was a man who had the spirit of an unclean demon, and he cried out with a loud voice, ",
        "reference": "en-NRSV-25089",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "34",
        "text": "“Let us alone! What have you to do with us, Jesus of Nazareth? Have you come to destroy us? I know who you are, the Holy One of God.” ",
        "reference": "en-NRSV-25090",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "35",
        "text": "But Jesus rebuked him, saying, “Be silent, and come out of him!” When the demon had thrown him down before them, he came out of him without having done him any harm. ",
        "reference": "en-NRSV-25091",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "36",
        "text": "They were all amazed and kept saying to one another, “What kind of utterance is this? For with authority and power he commands the unclean spirits, and out they come!” ",
        "reference": "en-NRSV-25092",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "37",
        "text": "And a report about him began to reach every place in the region.",
        "reference": "en-NRSV-25093",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "38",
        "text": "\nAfter leaving the synagogue he entered Simon’s house. Now Simon’s mother-in-law was suffering from a high fever, and they asked him about her. \n",
        "headerReference": "en-NRSV-25094",
        "title": "\nHealings at Simon’s House\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "39",
        "text": "Then he stood over her and rebuked the fever, and it left her. Immediately she got up and began to serve them.",
        "reference": "en-NRSV-25095",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "40",
        "text": "As the sun was setting, all those who had any who were sick with various kinds of diseases brought them to him; and he laid his hands on each of them and cured them. ",
        "reference": "en-NRSV-25096",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "41",
        "text": "Demons also came out of many, shouting, “You are the Son of God!” But he rebuked them and would not allow them to speak, because they knew that he was the Messiah.",
        "reference": "en-NRSV-25097",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "42",
        "text": "\nAt daybreak he departed and went into a deserted place. And the crowds were looking for him; and when they reached him, they wanted to prevent him from leaving them. \n",
        "headerReference": "en-NRSV-25098",
        "title": "\nJesus Preaches in the Synagogues\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "43",
        "text": "But he said to them, “I must proclaim the good news of the kingdom of God to the other cities also; for I was sent for this purpose.” ",
        "reference": "en-NRSV-25099",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "4",
        "verse": "44",
        "text": "So he continued proclaiming the message in the synagogues of Judea.",
        "reference": "en-NRSV-25100",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "1",
        "text": "Once while Jesus was standing beside the lake of Gennesaret, and the crowd was pressing in on him to hear the word of God, ",
        "headerReference": "en-NRSV-25101",
        "title": "\nJesus Calls the First Disciples\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "2",
        "text": "he saw two boats there at the shore of the lake; the fishermen had gone out of them and were washing their nets. ",
        "reference": "en-NRSV-25102",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "3",
        "text": "He got into one of the boats, the one belonging to Simon, and asked him to put out a little way from the shore. Then he sat down and taught the crowds from the boat. ",
        "reference": "en-NRSV-25103",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "4",
        "text": "When he had finished speaking, he said to Simon, “Put out into the deep water and let down your nets for a catch.” ",
        "reference": "en-NRSV-25104",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "5",
        "text": "Simon answered, “Master, we have worked all night long but have caught nothing. Yet if you say so, I will let down the nets.” ",
        "reference": "en-NRSV-25105",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "6",
        "text": "When they had done this, they caught so many fish that their nets were beginning to break. ",
        "reference": "en-NRSV-25106",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "7",
        "text": "So they signaled their partners in the other boat to come and help them. And they came and filled both boats, so that they began to sink. ",
        "reference": "en-NRSV-25107",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "8",
        "text": "But when Simon Peter saw it, he fell down at Jesus’ knees, saying, “Go away from me, Lord, for I am a sinful man!” ",
        "reference": "en-NRSV-25108",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "9",
        "text": "For he and all who were with him were amazed at the catch of fish that they had taken; ",
        "reference": "en-NRSV-25109",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "10",
        "text": "and so also were James and John, sons of Zebedee, who were partners with Simon. Then Jesus said to Simon, “Do not be afraid; from now on you will be catching people.” ",
        "reference": "en-NRSV-25110",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "11",
        "text": "When they had brought their boats to shore, they left everything and followed him.",
        "reference": "en-NRSV-25111",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "12",
        "text": "\nOnce, when he was in one of the cities, there was a man covered with leprosy. When he saw Jesus, he bowed with his face to the ground and begged him, “Lord, if you choose, you can make me clean.” \n",
        "headerReference": "en-NRSV-25112",
        "title": "\nJesus Cleanses a Leper\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "13",
        "text": "Then Jesus stretched out his hand, touched him, and said, “I do choose. Be made clean.” Immediately the leprosy left him. ",
        "reference": "en-NRSV-25113",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "14",
        "text": "And he ordered him to tell no one. “Go,” he said, “and show yourself to the priest, and, as Moses commanded, make an offering for your cleansing, for a testimony to them.” ",
        "reference": "en-NRSV-25114",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "15",
        "text": "But now more than ever the word about Jesus spread abroad; many crowds would gather to hear him and to be cured of their diseases. ",
        "reference": "en-NRSV-25115",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "16",
        "text": "But he would withdraw to deserted places and pray.",
        "reference": "en-NRSV-25116",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "17",
        "text": "\nOne day, while he was teaching, Pharisees and teachers of the law were sitting near by (they had come from every village of Galilee and Judea and from Jerusalem); and the power of the Lord was with him to heal. \n",
        "headerReference": "en-NRSV-25117",
        "title": "\nJesus Heals a Paralytic\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "18",
        "text": "Just then some men came, carrying a paralyzed man on a bed. They were trying to bring him in and lay him before Jesus; ",
        "reference": "en-NRSV-25118",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "19",
        "text": "but finding no way to bring him in because of the crowd, they went up on the roof and let him down with his bed through the tiles into the middle of the crowd in front of Jesus. ",
        "reference": "en-NRSV-25119",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "20",
        "text": "When he saw their faith, he said, “Friend, your sins are forgiven you.” ",
        "reference": "en-NRSV-25120",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "21",
        "text": "Then the scribes and the Pharisees began to question, “Who is this who is speaking blasphemies? Who can forgive sins but God alone?” ",
        "reference": "en-NRSV-25121",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "22",
        "text": "When Jesus perceived their questionings, he answered them, “Why do you raise such questions in your hearts? ",
        "reference": "en-NRSV-25122",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "23",
        "text": "Which is easier, to say, ‘Your sins are forgiven you,’ or to say, ‘Stand up and walk’? ",
        "reference": "en-NRSV-25123",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "24",
        "text": "But so that you may know that the Son of Man has authority on earth to forgive sins”—he said to the one who was paralyzed—“I say to you, stand up and take your bed and go to your home.” ",
        "reference": "en-NRSV-25124",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "25",
        "text": "Immediately he stood up before them, took what he had been lying on, and went to his home, glorifying God. ",
        "reference": "en-NRSV-25125",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "26",
        "text": "Amazement seized all of them, and they glorified God and were filled with awe, saying, “We have seen strange things today.”",
        "reference": "en-NRSV-25126",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "27",
        "text": "\nAfter this he went out and saw a tax collector named Levi, sitting at the tax booth; and he said to him, “Follow me.” \n",
        "headerReference": "en-NRSV-25127",
        "title": "\nJesus Calls Levi\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "28",
        "text": "And he got up, left everything, and followed him.",
        "reference": "en-NRSV-25128",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "29",
        "text": "Then Levi gave a great banquet for him in his house; and there was a large crowd of tax collectors and others sitting at the table with them. ",
        "reference": "en-NRSV-25129",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "30",
        "text": "The Pharisees and their scribes were complaining to his disciples, saying, “Why do you eat and drink with tax collectors and sinners?” ",
        "reference": "en-NRSV-25130",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "31",
        "text": "Jesus answered, “Those who are well have no need of a physician, but those who are sick; ",
        "reference": "en-NRSV-25131",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "32",
        "text": "I have come to call not the righteous but sinners to repentance.”",
        "reference": "en-NRSV-25132",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "33",
        "text": "\nThen they said to him, “John’s disciples, like the disciples of the Pharisees, frequently fast and pray, but your disciples eat and drink.” \n",
        "headerReference": "en-NRSV-25133",
        "title": "\nThe Question about Fasting\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "34",
        "text": "Jesus said to them, “You cannot make wedding guests fast while the bridegroom is with them, can you? ",
        "reference": "en-NRSV-25134",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "35",
        "text": "The days will come when the bridegroom will be taken away from them, and then they will fast in those days.” ",
        "reference": "en-NRSV-25135",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "36",
        "text": "He also told them a parable: “No one tears a piece from a new garment and sews it on an old garment; otherwise the new will be torn, and the piece from the new will not match the old. ",
        "reference": "en-NRSV-25136",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "37",
        "text": "And no one puts new wine into old wineskins; otherwise the new wine will burst the skins and will be spilled, and the skins will be destroyed. ",
        "reference": "en-NRSV-25137",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "38",
        "text": "But new wine must be put into fresh wineskins. ",
        "reference": "en-NRSV-25138",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "5",
        "verse": "39",
        "text": "And no one after drinking old wine desires new wine, but says, ‘The old is good.’”",
        "reference": "en-NRSV-25139",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "1",
        "text": "One sabbath while Jesus was going through the grainfields, his disciples plucked some heads of grain, rubbed them in their hands, and ate them. ",
        "headerReference": "en-NRSV-25140",
        "title": "\nThe Question about the Sabbath\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "2",
        "text": "But some of the Pharisees said, “Why are you doing what is not lawful on the sabbath?” ",
        "reference": "en-NRSV-25141",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "3",
        "text": "Jesus answered, “Have you not read what David did when he and his companions were hungry? ",
        "reference": "en-NRSV-25142",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "4",
        "text": "He entered the house of God and took and ate the bread of the Presence, which it is not lawful for any but the priests to eat, and gave some to his companions?” ",
        "reference": "en-NRSV-25143",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "5",
        "text": "Then he said to them, “The Son of Man is lord of the sabbath.”",
        "reference": "en-NRSV-25144",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "6",
        "text": "\nOn another sabbath he entered the synagogue and taught, and there was a man there whose right hand was withered. \n",
        "headerReference": "en-NRSV-25145",
        "title": "\nThe Man with a Withered Hand\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "7",
        "text": "The scribes and the Pharisees watched him to see whether he would cure on the sabbath, so that they might find an accusation against him. ",
        "reference": "en-NRSV-25146",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "8",
        "text": "Even though he knew what they were thinking, he said to the man who had the withered hand, “Come and stand here.” He got up and stood there. ",
        "reference": "en-NRSV-25147",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "9",
        "text": "Then Jesus said to them, “I ask you, is it lawful to do good or to do harm on the sabbath, to save life or to destroy it?” ",
        "reference": "en-NRSV-25148",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "10",
        "text": "After looking around at all of them, he said to him, “Stretch out your hand.” He did so, and his hand was restored. ",
        "reference": "en-NRSV-25149",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "11",
        "text": "But they were filled with fury and discussed with one another what they might do to Jesus.",
        "reference": "en-NRSV-25150",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "12",
        "text": "\nNow during those days he went out to the mountain to pray; and he spent the night in prayer to God. \n",
        "headerReference": "en-NRSV-25151",
        "title": "\nJesus Chooses the Twelve Apostles\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "13",
        "text": "And when day came, he called his disciples and chose twelve of them, whom he also named apostles: ",
        "reference": "en-NRSV-25152",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "14",
        "text": "Simon, whom he named Peter, and his brother Andrew, and James, and John, and Philip, and Bartholomew, ",
        "reference": "en-NRSV-25153",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "15",
        "text": "and Matthew, and Thomas, and James son of Alphaeus, and Simon, who was called the Zealot, ",
        "reference": "en-NRSV-25154",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "16",
        "text": "and Judas son of James, and Judas Iscariot, who became a traitor.",
        "reference": "en-NRSV-25155",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "17",
        "text": "\nHe came down with them and stood on a level place, with a great crowd of his disciples and a great multitude of people from all Judea, Jerusalem, and the coast of Tyre and Sidon. \n",
        "headerReference": "en-NRSV-25156",
        "title": "\nJesus Teaches and Heals\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "18",
        "text": "They had come to hear him and to be healed of their diseases; and those who were troubled with unclean spirits were cured. ",
        "reference": "en-NRSV-25157",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "19",
        "text": "And all in the crowd were trying to touch him, for power came out from him and healed all of them.",
        "reference": "en-NRSV-25158",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "20",
        "text": "\nThen he looked up at his disciples and said:\n \n“Blessed are you who are poor,    \n \nfor yours is the kingdom of God.\n",
        "headerReference": "en-NRSV-25159",
        "title": "\nBlessings and Woes\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "21",
        "text": "“Blessed are you who are hungry now,     \nfor you will be filled.\n \n“Blessed are you who weep now,    \n \nfor you will laugh.\n",
        "reference": "en-NRSV-25160",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "22",
        "text": "“Blessed are you when people hate you, and when they exclude you, revile you, and defame you on account of the Son of Man. ",
        "reference": "en-NRSV-25161",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "23",
        "text": "Rejoice in that day and leap for joy, for surely your reward is great in heaven; for that is what their ancestors did to the prophets.",
        "reference": "en-NRSV-25162",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "24",
        "text": "“But woe to you who are rich,     \nfor you have received your consolation.\n",
        "reference": "en-NRSV-25163",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "25",
        "text": "“Woe to you who are full now,     \nfor you will be hungry.\n \n“Woe to you who are laughing now,    \n \nfor you will mourn and weep.\n",
        "reference": "en-NRSV-25164",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "26",
        "text": "“Woe to you when all speak well of you, for that is what their ancestors did to the false prophets.",
        "reference": "en-NRSV-25165",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "27",
        "text": "\n“But I say to you that listen, Love your enemies, do good to those who hate you, \n",
        "headerReference": "en-NRSV-25166",
        "title": "\nLove for Enemies\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "28",
        "text": "bless those who curse you, pray for those who abuse you. ",
        "reference": "en-NRSV-25167",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "29",
        "text": "If anyone strikes you on the cheek, offer the other also; and from anyone who takes away your coat do not withhold even your shirt. ",
        "reference": "en-NRSV-25168",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "30",
        "text": "Give to everyone who begs from you; and if anyone takes away your goods, do not ask for them again. ",
        "reference": "en-NRSV-25169",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "31",
        "text": "Do to others as you would have them do to you.",
        "reference": "en-NRSV-25170",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "32",
        "text": "“If you love those who love you, what credit is that to you? For even sinners love those who love them. ",
        "reference": "en-NRSV-25171",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "33",
        "text": "If you do good to those who do good to you, what credit is that to you? For even sinners do the same. ",
        "reference": "en-NRSV-25172",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "34",
        "text": "If you lend to those from whom you hope to receive, what credit is that to you? Even sinners lend to sinners, to receive as much again. ",
        "reference": "en-NRSV-25173",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "35",
        "text": "But love your enemies, do good, and lend, expecting nothing in return. Your reward will be great, and you will be children of the Most High; for he is kind to the ungrateful and the wicked. ",
        "reference": "en-NRSV-25174",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "36",
        "text": "Be merciful, just as your Father is merciful.",
        "reference": "en-NRSV-25175",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "37",
        "text": "\n“Do not judge, and you will not be judged; do not condemn, and you will not be condemned. Forgive, and you will be forgiven; \n",
        "headerReference": "en-NRSV-25176",
        "title": "\nJudging Others\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "38",
        "text": "give, and it will be given to you. A good measure, pressed down, shaken together, running over, will be put into your lap; for the measure you give will be the measure you get back.”",
        "reference": "en-NRSV-25177",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "39",
        "text": "He also told them a parable: “Can a blind person guide a blind person? Will not both fall into a pit? ",
        "reference": "en-NRSV-25178",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "40",
        "text": "A disciple is not above the teacher, but everyone who is fully qualified will be like the teacher. ",
        "reference": "en-NRSV-25179",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "41",
        "text": "Why do you see the speck in your neighbor’s eye, but do not notice the log in your own eye? ",
        "reference": "en-NRSV-25180",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "42",
        "text": "Or how can you say to your neighbor, ‘Friend, let me take out the speck in your eye,’ when you yourself do not see the log in your own eye? You hypocrite, first take the log out of your own eye, and then you will see clearly to take the speck out of your neighbor’s eye.",
        "reference": "en-NRSV-25181",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "43",
        "text": "\n“No good tree bears bad fruit, nor again does a bad tree bear good fruit; \n",
        "headerReference": "en-NRSV-25182",
        "title": "\nA Tree and Its Fruit\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "44",
        "text": "for each tree is known by its own fruit. Figs are not gathered from thorns, nor are grapes picked from a bramble bush. ",
        "reference": "en-NRSV-25183",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "45",
        "text": "The good person out of the good treasure of the heart produces good, and the evil person out of evil treasure produces evil; for it is out of the abundance of the heart that the mouth speaks.",
        "reference": "en-NRSV-25184",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "46",
        "text": "\n“Why do you call me ‘Lord, Lord,’ and do not do what I tell you? \n",
        "headerReference": "en-NRSV-25185",
        "title": "\nThe Two Foundations\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "47",
        "text": "I will show you what someone is like who comes to me, hears my words, and acts on them. ",
        "reference": "en-NRSV-25186",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "48",
        "text": "That one is like a man building a house, who dug deeply and laid the foundation on rock; when a flood arose, the river burst against that house but could not shake it, because it had been well built. ",
        "reference": "en-NRSV-25187",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "6",
        "verse": "49",
        "text": "But the one who hears and does not act is like a man who built a house on the ground without a foundation. When the river burst against it, immediately it fell, and great was the ruin of that house.”",
        "reference": "en-NRSV-25188",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "1",
        "text": "After Jesus had finished all his sayings in the hearing of the people, he entered Capernaum. ",
        "headerReference": "en-NRSV-25189",
        "title": "\nJesus Heals a Centurion’s Servant\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "2",
        "text": "A centurion there had a slave whom he valued highly, and who was ill and close to death. ",
        "reference": "en-NRSV-25190",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "3",
        "text": "When he heard about Jesus, he sent some Jewish elders to him, asking him to come and heal his slave. ",
        "reference": "en-NRSV-25191",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "4",
        "text": "When they came to Jesus, they appealed to him earnestly, saying, “He is worthy of having you do this for him, ",
        "reference": "en-NRSV-25192",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "5",
        "text": "for he loves our people, and it is he who built our synagogue for us.” ",
        "reference": "en-NRSV-25193",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "6",
        "text": "And Jesus went with them, but when he was not far from the house, the centurion sent friends to say to him, “Lord, do not trouble yourself, for I am not worthy to have you come under my roof; ",
        "reference": "en-NRSV-25194",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "7",
        "text": "therefore I did not presume to come to you. But only speak the word, and let my servant be healed. ",
        "reference": "en-NRSV-25195",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "8",
        "text": "For I also am a man set under authority, with soldiers under me; and I say to one, ‘Go,’ and he goes, and to another, ‘Come,’ and he comes, and to my slave, ‘Do this,’ and the slave does it.” ",
        "reference": "en-NRSV-25196",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "9",
        "text": "When Jesus heard this he was amazed at him, and turning to the crowd that followed him, he said, “I tell you, not even in Israel have I found such faith.” ",
        "reference": "en-NRSV-25197",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "10",
        "text": "When those who had been sent returned to the house, they found the slave in good health.",
        "reference": "en-NRSV-25198",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "11",
        "text": "\nSoon afterwards he went to a town called Nain, and his disciples and a large crowd went with him. \n",
        "headerReference": "en-NRSV-25199",
        "title": "\nJesus Raises the Widow’s Son at Nain\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "12",
        "text": "As he approached the gate of the town, a man who had died was being carried out. He was his mother’s only son, and she was a widow; and with her was a large crowd from the town. ",
        "reference": "en-NRSV-25200",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "13",
        "text": "When the Lord saw her, he had compassion for her and said to her, “Do not weep.” ",
        "reference": "en-NRSV-25201",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "14",
        "text": "Then he came forward and touched the bier, and the bearers stood still. And he said, “Young man, I say to you, rise!” ",
        "reference": "en-NRSV-25202",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "15",
        "text": "The dead man sat up and began to speak, and Jesus gave him to his mother. ",
        "reference": "en-NRSV-25203",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "16",
        "text": "Fear seized all of them; and they glorified God, saying, “A great prophet has risen among us!” and “God has looked favorably on his people!” ",
        "reference": "en-NRSV-25204",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "17",
        "text": "This word about him spread throughout Judea and all the surrounding country.",
        "reference": "en-NRSV-25205",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "18",
        "text": "\nThe disciples of John reported all these things to him. So John summoned two of his disciples \n",
        "headerReference": "en-NRSV-25206",
        "title": "\nMessengers from John the Baptist\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "19",
        "text": "and sent them to the Lord to ask, “Are you the one who is to come, or are we to wait for another?” ",
        "reference": "en-NRSV-25207",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "20",
        "text": "When the men had come to him, they said, “John the Baptist has sent us to you to ask, ‘Are you the one who is to come, or are we to wait for another?’” ",
        "reference": "en-NRSV-25208",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "21",
        "text": "Jesus had just then cured many people of diseases, plagues, and evil spirits, and had given sight to many who were blind. ",
        "reference": "en-NRSV-25209",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "22",
        "text": "And he answered them, “Go and tell John what you have seen and heard: the blind receive their sight, the lame walk, the lepers are cleansed, the deaf hear, the dead are raised, the poor have good news brought to them. ",
        "reference": "en-NRSV-25210",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "23",
        "text": "And blessed is anyone who takes no offense at me.”",
        "reference": "en-NRSV-25211",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "24",
        "text": "When John’s messengers had gone, Jesus began to speak to the crowds about John: “What did you go out into the wilderness to look at? A reed shaken by the wind? ",
        "reference": "en-NRSV-25212",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "25",
        "text": "What then did you go out to see? Someone dressed in soft robes? Look, those who put on fine clothing and live in luxury are in royal palaces. ",
        "reference": "en-NRSV-25213",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "26",
        "text": "What then did you go out to see? A prophet? Yes, I tell you, and more than a prophet. ",
        "reference": "en-NRSV-25214",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "27",
        "text": "This is the one about whom it is written, \n‘See, I am sending my messenger ahead of you,    \n \nwho will prepare your way before you.’\n",
        "reference": "en-NRSV-25215",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "28",
        "text": "I tell you, among those born of women no one is greater than John; yet the least in the kingdom of God is greater than he.” ",
        "reference": "en-NRSV-25216",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "29",
        "text": "(And all the people who heard this, including the tax collectors, acknowledged the justice of God, because they had been baptized with John’s baptism. ",
        "reference": "en-NRSV-25217",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "30",
        "text": "But by refusing to be baptized by him, the Pharisees and the lawyers rejected God’s purpose for themselves.)",
        "reference": "en-NRSV-25218",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "31",
        "text": "“To what then will I compare the people of this generation, and what are they like? ",
        "reference": "en-NRSV-25219",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "32",
        "text": "They are like children sitting in the marketplace and calling to one another, \n‘We played the flute for you, and you did not dance;    \n \nwe wailed, and you did not weep.’\n",
        "reference": "en-NRSV-25220",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "33",
        "text": "For John the Baptist has come eating no bread and drinking no wine, and you say, ‘He has a demon’; ",
        "reference": "en-NRSV-25221",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "34",
        "text": "the Son of Man has come eating and drinking, and you say, ‘Look, a glutton and a drunkard, a friend of tax collectors and sinners!’ ",
        "reference": "en-NRSV-25222",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "35",
        "text": "Nevertheless, wisdom is vindicated by all her children.”",
        "reference": "en-NRSV-25223",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "36",
        "text": "\nOne of the Pharisees asked Jesus to eat with him, and he went into the Pharisee’s house and took his place at the table. \n",
        "headerReference": "en-NRSV-25224",
        "title": "\nA Sinful Woman Forgiven\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "37",
        "text": "And a woman in the city, who was a sinner, having learned that he was eating in the Pharisee’s house, brought an alabaster jar of ointment. ",
        "reference": "en-NRSV-25225",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "38",
        "text": "She stood behind him at his feet, weeping, and began to bathe his feet with her tears and to dry them with her hair. Then she continued kissing his feet and anointing them with the ointment. ",
        "reference": "en-NRSV-25226",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "39",
        "text": "Now when the Pharisee who had invited him saw it, he said to himself, “If this man were a prophet, he would have known who and what kind of woman this is who is touching him—that she is a sinner.” ",
        "reference": "en-NRSV-25227",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "40",
        "text": "Jesus spoke up and said to him, “Simon, I have something to say to you.” “Teacher,” he replied, “speak.” ",
        "reference": "en-NRSV-25228",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "41",
        "text": "“A certain creditor had two debtors; one owed five hundred denarii, and the other fifty. ",
        "reference": "en-NRSV-25229",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "42",
        "text": "When they could not pay, he canceled the debts for both of them. Now which of them will love him more?” ",
        "reference": "en-NRSV-25230",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "43",
        "text": "Simon answered, “I suppose the one for whom he canceled the greater debt.” And Jesus said to him, “You have judged rightly.” ",
        "reference": "en-NRSV-25231",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "44",
        "text": "Then turning toward the woman, he said to Simon, “Do you see this woman? I entered your house; you gave me no water for my feet, but she has bathed my feet with her tears and dried them with her hair. ",
        "reference": "en-NRSV-25232",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "45",
        "text": "You gave me no kiss, but from the time I came in she has not stopped kissing my feet. ",
        "reference": "en-NRSV-25233",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "46",
        "text": "You did not anoint my head with oil, but she has anointed my feet with ointment. ",
        "reference": "en-NRSV-25234",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "47",
        "text": "Therefore, I tell you, her sins, which were many, have been forgiven; hence she has shown great love. But the one to whom little is forgiven, loves little.” ",
        "reference": "en-NRSV-25235",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "48",
        "text": "Then he said to her, “Your sins are forgiven.” ",
        "reference": "en-NRSV-25236",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "49",
        "text": "But those who were at the table with him began to say among themselves, “Who is this who even forgives sins?” ",
        "reference": "en-NRSV-25237",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "7",
        "verse": "50",
        "text": "And he said to the woman, “Your faith has saved you; go in peace.”",
        "reference": "en-NRSV-25238",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "1",
        "text": "Soon afterwards he went on through cities and villages, proclaiming and bringing the good news of the kingdom of God. The twelve were with him, ",
        "headerReference": "en-NRSV-25239",
        "title": "\nSome Women Accompany Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "2",
        "text": "as well as some women who had been cured of evil spirits and infirmities: Mary, called Magdalene, from whom seven demons had gone out, ",
        "reference": "en-NRSV-25240",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "3",
        "text": "and Joanna, the wife of Herod’s steward Chuza, and Susanna, and many others, who provided for them out of their resources.",
        "reference": "en-NRSV-25241",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "4",
        "text": "\nWhen a great crowd gathered and people from town after town came to him, he said in a parable: \n",
        "headerReference": "en-NRSV-25242",
        "title": "\nThe Parable of the Sower\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "5",
        "text": "“A sower went out to sow his seed; and as he sowed, some fell on the path and was trampled on, and the birds of the air ate it up. ",
        "reference": "en-NRSV-25243",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "6",
        "text": "Some fell on the rock; and as it grew up, it withered for lack of moisture. ",
        "reference": "en-NRSV-25244",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "7",
        "text": "Some fell among thorns, and the thorns grew with it and choked it. ",
        "reference": "en-NRSV-25245",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "8",
        "text": "Some fell into good soil, and when it grew, it produced a hundredfold.” As he said this, he called out, “Let anyone with ears to hear listen!”",
        "reference": "en-NRSV-25246",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "9",
        "text": "\nThen his disciples asked him what this parable meant. \n",
        "headerReference": "en-NRSV-25247",
        "title": "\nThe Purpose of the Parables\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "10",
        "text": "He said, “To you it has been given to know the secrets of the kingdom of God; but to others I speak in parables, so that \n‘looking they may not perceive,    \n \nand listening they may not understand.’\n",
        "reference": "en-NRSV-25248",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "11",
        "text": "\n“Now the parable is this: The seed is the word of God. \n",
        "headerReference": "en-NRSV-25249",
        "title": "\nThe Parable of the Sower Explained\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "12",
        "text": "The ones on the path are those who have heard; then the devil comes and takes away the word from their hearts, so that they may not believe and be saved. ",
        "reference": "en-NRSV-25250",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "13",
        "text": "The ones on the rock are those who, when they hear the word, receive it with joy. But these have no root; they believe only for a while and in a time of testing fall away. ",
        "reference": "en-NRSV-25251",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "14",
        "text": "As for what fell among the thorns, these are the ones who hear; but as they go on their way, they are choked by the cares and riches and pleasures of life, and their fruit does not mature. ",
        "reference": "en-NRSV-25252",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "15",
        "text": "But as for that in the good soil, these are the ones who, when they hear the word, hold it fast in an honest and good heart, and bear fruit with patient endurance.",
        "reference": "en-NRSV-25253",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "16",
        "text": "\n“No one after lighting a lamp hides it under a jar, or puts it under a bed, but puts it on a lampstand, so that those who enter may see the light. \n",
        "headerReference": "en-NRSV-25254",
        "title": "\nA Lamp under a Jar\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "17",
        "text": "For nothing is hidden that will not be disclosed, nor is anything secret that will not become known and come to light. ",
        "reference": "en-NRSV-25255",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "18",
        "text": "Then pay attention to how you listen; for to those who have, more will be given; and from those who do not have, even what they seem to have will be taken away.”",
        "reference": "en-NRSV-25256",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "19",
        "text": "\nThen his mother and his brothers came to him, but they could not reach him because of the crowd. \n",
        "headerReference": "en-NRSV-25257",
        "title": "\nThe True Kindred of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "20",
        "text": "And he was told, “Your mother and your brothers are standing outside, wanting to see you.” ",
        "reference": "en-NRSV-25258",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "21",
        "text": "But he said to them, “My mother and my brothers are those who hear the word of God and do it.”",
        "reference": "en-NRSV-25259",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "22",
        "text": "\nOne day he got into a boat with his disciples, and he said to them, “Let us go across to the other side of the lake.” So they put out, \n",
        "headerReference": "en-NRSV-25260",
        "title": "\nJesus Calms a Storm\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "23",
        "text": "and while they were sailing he fell asleep. A windstorm swept down on the lake, and the boat was filling with water, and they were in danger. ",
        "reference": "en-NRSV-25261",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "24",
        "text": "They went to him and woke him up, shouting, “Master, Master, we are perishing!” And he woke up and rebuked the wind and the raging waves; they ceased, and there was a calm. ",
        "reference": "en-NRSV-25262",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "25",
        "text": "He said to them, “Where is your faith?” They were afraid and amazed, and said to one another, “Who then is this, that he commands even the winds and the water, and they obey him?”",
        "reference": "en-NRSV-25263",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "26",
        "text": "\nThen they arrived at the country of the Gerasenes, which is opposite Galilee. \n",
        "headerReference": "en-NRSV-25264",
        "title": "\nJesus Heals the Gerasene Demoniac\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "27",
        "text": "As he stepped out on land, a man of the city who had demons met him. For a long time he had worn no clothes, and he did not live in a house but in the tombs. ",
        "reference": "en-NRSV-25265",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "28",
        "text": "When he saw Jesus, he fell down before him and shouted at the top of his voice, “What have you to do with me, Jesus, Son of the Most High God? I beg you, do not torment me”— ",
        "reference": "en-NRSV-25266",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "29",
        "text": "for Jesus had commanded the unclean spirit to come out of the man. (For many times it had seized him; he was kept under guard and bound with chains and shackles, but he would break the bonds and be driven by the demon into the wilds.) ",
        "reference": "en-NRSV-25267",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "30",
        "text": "Jesus then asked him, “What is your name?” He said, “Legion”; for many demons had entered him. ",
        "reference": "en-NRSV-25268",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "31",
        "text": "They begged him not to order them to go back into the abyss.",
        "reference": "en-NRSV-25269",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "32",
        "text": "Now there on the hillside a large herd of swine was feeding; and the demons begged Jesus to let them enter these. So he gave them permission. ",
        "reference": "en-NRSV-25270",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "33",
        "text": "Then the demons came out of the man and entered the swine, and the herd rushed down the steep bank into the lake and was drowned.",
        "reference": "en-NRSV-25271",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "34",
        "text": "When the swineherds saw what had happened, they ran off and told it in the city and in the country. ",
        "reference": "en-NRSV-25272",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "35",
        "text": "Then people came out to see what had happened, and when they came to Jesus, they found the man from whom the demons had gone sitting at the feet of Jesus, clothed and in his right mind. And they were afraid. ",
        "reference": "en-NRSV-25273",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "36",
        "text": "Those who had seen it told them how the one who had been possessed by demons had been healed. ",
        "reference": "en-NRSV-25274",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "37",
        "text": "Then all the people of the surrounding country of the Gerasenes asked Jesus to leave them; for they were seized with great fear. So he got into the boat and returned. ",
        "reference": "en-NRSV-25275",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "38",
        "text": "The man from whom the demons had gone begged that he might be with him; but Jesus sent him away, saying, ",
        "reference": "en-NRSV-25276",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "39",
        "text": "“Return to your home, and declare how much God has done for you.” So he went away, proclaiming throughout the city how much Jesus had done for him.",
        "reference": "en-NRSV-25277",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "40",
        "text": "\nNow when Jesus returned, the crowd welcomed him, for they were all waiting for him. \n",
        "headerReference": "en-NRSV-25278",
        "title": "\nA Girl Restored to Life and a Woman Healed\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "41",
        "text": "Just then there came a man named Jairus, a leader of the synagogue. He fell at Jesus’ feet and begged him to come to his house, ",
        "reference": "en-NRSV-25279",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "42",
        "text": "for he had an only daughter, about twelve years old, who was dying. \nAs he went, the crowds pressed in on him. \n",
        "reference": "en-NRSV-25280",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "43",
        "text": "Now there was a woman who had been suffering from hemorrhages for twelve years; and though she had spent all she had on physicians, no one could cure her. ",
        "reference": "en-NRSV-25281",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "44",
        "text": "She came up behind him and touched the fringe of his clothes, and immediately her hemorrhage stopped. ",
        "reference": "en-NRSV-25282",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "45",
        "text": "Then Jesus asked, “Who touched me?” When all denied it, Peter said, “Master, the crowds surround you and press in on you.” ",
        "reference": "en-NRSV-25283",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "46",
        "text": "But Jesus said, “Someone touched me; for I noticed that power had gone out from me.” ",
        "reference": "en-NRSV-25284",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "47",
        "text": "When the woman saw that she could not remain hidden, she came trembling; and falling down before him, she declared in the presence of all the people why she had touched him, and how she had been immediately healed. ",
        "reference": "en-NRSV-25285",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "48",
        "text": "He said to her, “Daughter, your faith has made you well; go in peace.”",
        "reference": "en-NRSV-25286",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "49",
        "text": "While he was still speaking, someone came from the leader’s house to say, “Your daughter is dead; do not trouble the teacher any longer.” ",
        "reference": "en-NRSV-25287",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "50",
        "text": "When Jesus heard this, he replied, “Do not fear. Only believe, and she will be saved.” ",
        "reference": "en-NRSV-25288",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "51",
        "text": "When he came to the house, he did not allow anyone to enter with him, except Peter, John, and James, and the child’s father and mother. ",
        "reference": "en-NRSV-25289",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "52",
        "text": "They were all weeping and wailing for her; but he said, “Do not weep; for she is not dead but sleeping.” ",
        "reference": "en-NRSV-25290",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "53",
        "text": "And they laughed at him, knowing that she was dead. ",
        "reference": "en-NRSV-25291",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "54",
        "text": "But he took her by the hand and called out, “Child, get up!” ",
        "reference": "en-NRSV-25292",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "55",
        "text": "Her spirit returned, and she got up at once. Then he directed them to give her something to eat. ",
        "reference": "en-NRSV-25293",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "8",
        "verse": "56",
        "text": "Her parents were astounded; but he ordered them to tell no one what had happened.",
        "reference": "en-NRSV-25294",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "1",
        "text": "Then Jesus called the twelve together and gave them power and authority over all demons and to cure diseases, ",
        "headerReference": "en-NRSV-25295",
        "title": "\nThe Mission of the Twelve\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "2",
        "text": "and he sent them out to proclaim the kingdom of God and to heal. ",
        "reference": "en-NRSV-25296",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "3",
        "text": "He said to them, “Take nothing for your journey, no staff, nor bag, nor bread, nor money—not even an extra tunic. ",
        "reference": "en-NRSV-25297",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "4",
        "text": "Whatever house you enter, stay there, and leave from there. ",
        "reference": "en-NRSV-25298",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "5",
        "text": "Wherever they do not welcome you, as you are leaving that town shake the dust off your feet as a testimony against them.” ",
        "reference": "en-NRSV-25299",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "6",
        "text": "They departed and went through the villages, bringing the good news and curing diseases everywhere.",
        "reference": "en-NRSV-25300",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "7",
        "text": "\nNow Herod the ruler heard about all that had taken place, and he was perplexed, because it was said by some that John had been raised from the dead, \n",
        "headerReference": "en-NRSV-25301",
        "title": "\nHerod’s Perplexity\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "8",
        "text": "by some that Elijah had appeared, and by others that one of the ancient prophets had arisen. ",
        "reference": "en-NRSV-25302",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "9",
        "text": "Herod said, “John I beheaded; but who is this about whom I hear such things?” And he tried to see him.",
        "reference": "en-NRSV-25303",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "10",
        "text": "\nOn their return the apostles told Jesus all they had done. He took them with him and withdrew privately to a city called Bethsaida. \n",
        "headerReference": "en-NRSV-25304",
        "title": "\nFeeding the Five Thousand\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "11",
        "text": "When the crowds found out about it, they followed him; and he welcomed them, and spoke to them about the kingdom of God, and healed those who needed to be cured.",
        "reference": "en-NRSV-25305",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "12",
        "text": "The day was drawing to a close, and the twelve came to him and said, “Send the crowd away, so that they may go into the surrounding villages and countryside, to lodge and get provisions; for we are here in a deserted place.” ",
        "reference": "en-NRSV-25306",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "13",
        "text": "But he said to them, “You give them something to eat.” They said, “We have no more than five loaves and two fish—unless we are to go and buy food for all these people.” ",
        "reference": "en-NRSV-25307",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "14",
        "text": "For there were about five thousand men. And he said to his disciples, “Make them sit down in groups of about fifty each.” ",
        "reference": "en-NRSV-25308",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "15",
        "text": "They did so and made them all sit down. ",
        "reference": "en-NRSV-25309",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "16",
        "text": "And taking the five loaves and the two fish, he looked up to heaven, and blessed and broke them, and gave them to the disciples to set before the crowd. ",
        "reference": "en-NRSV-25310",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "17",
        "text": "And all ate and were filled. What was left over was gathered up, twelve baskets of broken pieces.",
        "reference": "en-NRSV-25311",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "18",
        "text": "\nOnce when Jesus was praying alone, with only the disciples near him, he asked them, “Who do the crowds say that I am?” \n",
        "headerReference": "en-NRSV-25312",
        "title": "\nPeter’s Declaration about Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "19",
        "text": "They answered, “John the Baptist; but others, Elijah; and still others, that one of the ancient prophets has arisen.” ",
        "reference": "en-NRSV-25313",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "20",
        "text": "He said to them, “But who do you say that I am?” Peter answered, “The Messiah of God.”",
        "reference": "en-NRSV-25314",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "21",
        "text": "\nHe sternly ordered and commanded them not to tell anyone, \n",
        "headerReference": "en-NRSV-25315",
        "title": "\nJesus Foretells His Death and Resurrection\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "22",
        "text": "saying, “The Son of Man must undergo great suffering, and be rejected by the elders, chief priests, and scribes, and be killed, and on the third day be raised.”",
        "reference": "en-NRSV-25316",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "23",
        "text": "Then he said to them all, “If any want to become my followers, let them deny themselves and take up their cross daily and follow me. ",
        "reference": "en-NRSV-25317",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "24",
        "text": "For those who want to save their life will lose it, and those who lose their life for my sake will save it. ",
        "reference": "en-NRSV-25318",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "25",
        "text": "What does it profit them if they gain the whole world, but lose or forfeit themselves? ",
        "reference": "en-NRSV-25319",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "26",
        "text": "Those who are ashamed of me and of my words, of them the Son of Man will be ashamed when he comes in his glory and the glory of the Father and of the holy angels. ",
        "reference": "en-NRSV-25320",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "27",
        "text": "But truly I tell you, there are some standing here who will not taste death before they see the kingdom of God.”",
        "reference": "en-NRSV-25321",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "28",
        "text": "\nNow about eight days after these sayings Jesus took with him Peter and John and James, and went up on the mountain to pray. \n",
        "headerReference": "en-NRSV-25322",
        "title": "\nThe Transfiguration\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "29",
        "text": "And while he was praying, the appearance of his face changed, and his clothes became dazzling white. ",
        "reference": "en-NRSV-25323",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "30",
        "text": "Suddenly they saw two men, Moses and Elijah, talking to him. ",
        "reference": "en-NRSV-25324",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "31",
        "text": "They appeared in glory and were speaking of his departure, which he was about to accomplish at Jerusalem. ",
        "reference": "en-NRSV-25325",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "32",
        "text": "Now Peter and his companions were weighed down with sleep; but since they had stayed awake, they saw his glory and the two men who stood with him. ",
        "reference": "en-NRSV-25326",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "33",
        "text": "Just as they were leaving him, Peter said to Jesus, “Master, it is good for us to be here; let us make three dwellings, one for you, one for Moses, and one for Elijah”—not knowing what he said. ",
        "reference": "en-NRSV-25327",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "34",
        "text": "While he was saying this, a cloud came and overshadowed them; and they were terrified as they entered the cloud. ",
        "reference": "en-NRSV-25328",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "35",
        "text": "Then from the cloud came a voice that said, “This is my Son, my Chosen; listen to him!” ",
        "reference": "en-NRSV-25329",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "36",
        "text": "When the voice had spoken, Jesus was found alone. And they kept silent and in those days told no one any of the things they had seen.",
        "reference": "en-NRSV-25330",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "37",
        "text": "\nOn the next day, when they had come down from the mountain, a great crowd met him. \n",
        "headerReference": "en-NRSV-25331",
        "title": "\nJesus Heals a Boy with a Demon\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "38",
        "text": "Just then a man from the crowd shouted, “Teacher, I beg you to look at my son; he is my only child. ",
        "reference": "en-NRSV-25332",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "39",
        "text": "Suddenly a spirit seizes him, and all at once he shrieks. It convulses him until he foams at the mouth; it mauls him and will scarcely leave him. ",
        "reference": "en-NRSV-25333",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "40",
        "text": "I begged your disciples to cast it out, but they could not.” ",
        "reference": "en-NRSV-25334",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "41",
        "text": "Jesus answered, “You faithless and perverse generation, how much longer must I be with you and bear with you? Bring your son here.” ",
        "reference": "en-NRSV-25335",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "42",
        "text": "While he was coming, the demon dashed him to the ground in convulsions. But Jesus rebuked the unclean spirit, healed the boy, and gave him back to his father. ",
        "reference": "en-NRSV-25336",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "43",
        "text": "And all were astounded at the greatness of God. \nWhile everyone was amazed at all that he was doing, he said to his disciples, \n",
        "reference": "en-NRSV-25337",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "44",
        "text": "“Let these words sink into your ears: The Son of Man is going to be betrayed into human hands.” ",
        "reference": "en-NRSV-25338",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "45",
        "text": "But they did not understand this saying; its meaning was concealed from them, so that they could not perceive it. And they were afraid to ask him about this saying.",
        "reference": "en-NRSV-25339",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "46",
        "text": "\nAn argument arose among them as to which one of them was the greatest. \n",
        "headerReference": "en-NRSV-25340",
        "title": "\nTrue Greatness\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "47",
        "text": "But Jesus, aware of their inner thoughts, took a little child and put it by his side, ",
        "reference": "en-NRSV-25341",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "48",
        "text": "and said to them, “Whoever welcomes this child in my name welcomes me, and whoever welcomes me welcomes the one who sent me; for the least among all of you is the greatest.”",
        "reference": "en-NRSV-25342",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "49",
        "text": "\nJohn answered, “Master, we saw someone casting out demons in your name, and we tried to stop him, because he does not follow with us.” \n",
        "headerReference": "en-NRSV-25343",
        "title": "\nAnother Exorcist\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "50",
        "text": "But Jesus said to him, “Do not stop him; for whoever is not against you is for you.”",
        "reference": "en-NRSV-25344",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "51",
        "text": "\nWhen the days drew near for him to be taken up, he set his face to go to Jerusalem. \n",
        "headerReference": "en-NRSV-25345",
        "title": "\nA Samaritan Village Refuses to Receive Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "52",
        "text": "And he sent messengers ahead of him. On their way they entered a village of the Samaritans to make ready for him; ",
        "reference": "en-NRSV-25346",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "53",
        "text": "but they did not receive him, because his face was set toward Jerusalem. ",
        "reference": "en-NRSV-25347",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "54",
        "text": "When his disciples James and John saw it, they said, “Lord, do you want us to command fire to come down from heaven and consume them?” ",
        "reference": "en-NRSV-25348",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "55",
        "text": "But he turned and rebuked them. ",
        "reference": "en-NRSV-25349",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "56",
        "text": "Then they went on to another village.",
        "reference": "en-NRSV-25350",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "57",
        "text": "\nAs they were going along the road, someone said to him, “I will follow you wherever you go.” \n",
        "headerReference": "en-NRSV-25351",
        "title": "\nWould-Be Followers of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "58",
        "text": "And Jesus said to him, “Foxes have holes, and birds of the air have nests; but the Son of Man has nowhere to lay his head.” ",
        "reference": "en-NRSV-25352",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "59",
        "text": "To another he said, “Follow me.” But he said, “Lord, first let me go and bury my father.” ",
        "reference": "en-NRSV-25353",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "60",
        "text": "But Jesus said to him, “Let the dead bury their own dead; but as for you, go and proclaim the kingdom of God.” ",
        "reference": "en-NRSV-25354",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "61",
        "text": "Another said, “I will follow you, Lord; but let me first say farewell to those at my home.” ",
        "reference": "en-NRSV-25355",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "9",
        "verse": "62",
        "text": "Jesus said to him, “No one who puts a hand to the plow and looks back is fit for the kingdom of God.”",
        "reference": "en-NRSV-25356",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "1",
        "text": "After this the Lord appointed seventy others and sent them on ahead of him in pairs to every town and place where he himself intended to go. ",
        "headerReference": "en-NRSV-25357",
        "title": "\nThe Mission of the Seventy\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "2",
        "text": "He said to them, “The harvest is plentiful, but the laborers are few; therefore ask the Lord of the harvest to send out laborers into his harvest. ",
        "reference": "en-NRSV-25358",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "3",
        "text": "Go on your way. See, I am sending you out like lambs into the midst of wolves. ",
        "reference": "en-NRSV-25359",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "4",
        "text": "Carry no purse, no bag, no sandals; and greet no one on the road. ",
        "reference": "en-NRSV-25360",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "5",
        "text": "Whatever house you enter, first say, ‘Peace to this house!’ ",
        "reference": "en-NRSV-25361",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "6",
        "text": "And if anyone is there who shares in peace, your peace will rest on that person; but if not, it will return to you. ",
        "reference": "en-NRSV-25362",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "7",
        "text": "Remain in the same house, eating and drinking whatever they provide, for the laborer deserves to be paid. Do not move about from house to house. ",
        "reference": "en-NRSV-25363",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "8",
        "text": "Whenever you enter a town and its people welcome you, eat what is set before you; ",
        "reference": "en-NRSV-25364",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "9",
        "text": "cure the sick who are there, and say to them, ‘The kingdom of God has come near to you.’ ",
        "reference": "en-NRSV-25365",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "10",
        "text": "But whenever you enter a town and they do not welcome you, go out into its streets and say, ",
        "reference": "en-NRSV-25366",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "11",
        "text": "‘Even the dust of your town that clings to our feet, we wipe off in protest against you. Yet know this: the kingdom of God has come near.’ ",
        "reference": "en-NRSV-25367",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "12",
        "text": "I tell you, on that day it will be more tolerable for Sodom than for that town.",
        "reference": "en-NRSV-25368",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "13",
        "text": "\n“Woe to you, Chorazin! Woe to you, Bethsaida! For if the deeds of power done in you had been done in Tyre and Sidon, they would have repented long ago, sitting in sackcloth and ashes. \n",
        "headerReference": "en-NRSV-25369",
        "title": "\nWoes to Unrepentant Cities\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "14",
        "text": "But at the judgment it will be more tolerable for Tyre and Sidon than for you. ",
        "reference": "en-NRSV-25370",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "15",
        "text": "And you, Capernaum, \nwill you be exalted to heaven?    \n \nNo, you will be brought down to Hades.\n",
        "reference": "en-NRSV-25371",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "16",
        "text": "“Whoever listens to you listens to me, and whoever rejects you rejects me, and whoever rejects me rejects the one who sent me.”",
        "reference": "en-NRSV-25372",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "17",
        "text": "\nThe seventy returned with joy, saying, “Lord, in your name even the demons submit to us!” \n",
        "headerReference": "en-NRSV-25373",
        "title": "\nThe Return of the Seventy\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "18",
        "text": "He said to them, “I watched Satan fall from heaven like a flash of lightning. ",
        "reference": "en-NRSV-25374",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "19",
        "text": "See, I have given you authority to tread on snakes and scorpions, and over all the power of the enemy; and nothing will hurt you. ",
        "reference": "en-NRSV-25375",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "20",
        "text": "Nevertheless, do not rejoice at this, that the spirits submit to you, but rejoice that your names are written in heaven.”",
        "reference": "en-NRSV-25376",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "21",
        "text": "\nAt that same hour Jesus rejoiced in the Holy Spirit and said, “I thank you, Father, Lord of heaven and earth, because you have hidden these things from the wise and the intelligent and have revealed them to infants; yes, Father, for such was your gracious will. \n",
        "headerReference": "en-NRSV-25377",
        "title": "\nJesus Rejoices\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "22",
        "text": "All things have been handed over to me by my Father; and no one knows who the Son is except the Father, or who the Father is except the Son and anyone to whom the Son chooses to reveal him.”",
        "reference": "en-NRSV-25378",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "23",
        "text": "Then turning to the disciples, Jesus said to them privately, “Blessed are the eyes that see what you see! ",
        "reference": "en-NRSV-25379",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "24",
        "text": "For I tell you that many prophets and kings desired to see what you see, but did not see it, and to hear what you hear, but did not hear it.”",
        "reference": "en-NRSV-25380",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "25",
        "text": "\nJust then a lawyer stood up to test Jesus. “Teacher,” he said, “what must I do to inherit eternal life?” \n",
        "headerReference": "en-NRSV-25381",
        "title": "\nThe Parable of the Good Samaritan\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "26",
        "text": "He said to him, “What is written in the law? What do you read there?” ",
        "reference": "en-NRSV-25382",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "27",
        "text": "He answered, “You shall love the Lord your God with all your heart, and with all your soul, and with all your strength, and with all your mind; and your neighbor as yourself.” ",
        "reference": "en-NRSV-25383",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "28",
        "text": "And he said to him, “You have given the right answer; do this, and you will live.”",
        "reference": "en-NRSV-25384",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "29",
        "text": "But wanting to justify himself, he asked Jesus, “And who is my neighbor?” ",
        "reference": "en-NRSV-25385",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "30",
        "text": "Jesus replied, “A man was going down from Jerusalem to Jericho, and fell into the hands of robbers, who stripped him, beat him, and went away, leaving him half dead. ",
        "reference": "en-NRSV-25386",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "31",
        "text": "Now by chance a priest was going down that road; and when he saw him, he passed by on the other side. ",
        "reference": "en-NRSV-25387",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "32",
        "text": "So likewise a Levite, when he came to the place and saw him, passed by on the other side. ",
        "reference": "en-NRSV-25388",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "33",
        "text": "But a Samaritan while traveling came near him; and when he saw him, he was moved with pity. ",
        "reference": "en-NRSV-25389",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "34",
        "text": "He went to him and bandaged his wounds, having poured oil and wine on them. Then he put him on his own animal, brought him to an inn, and took care of him. ",
        "reference": "en-NRSV-25390",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "35",
        "text": "The next day he took out two denarii, gave them to the innkeeper, and said, ‘Take care of him; and when I come back, I will repay you whatever more you spend.’ ",
        "reference": "en-NRSV-25391",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "36",
        "text": "Which of these three, do you think, was a neighbor to the man who fell into the hands of the robbers?” ",
        "reference": "en-NRSV-25392",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "37",
        "text": "He said, “The one who showed him mercy.” Jesus said to him, “Go and do likewise.”",
        "reference": "en-NRSV-25393",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "38",
        "text": "\nNow as they went on their way, he entered a certain village, where a woman named Martha welcomed him into her home. \n",
        "headerReference": "en-NRSV-25394",
        "title": "\nJesus Visits Martha and Mary\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "39",
        "text": "She had a sister named Mary, who sat at the Lord’s feet and listened to what he was saying. ",
        "reference": "en-NRSV-25395",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "40",
        "text": "But Martha was distracted by her many tasks; so she came to him and asked, “Lord, do you not care that my sister has left me to do all the work by myself? Tell her then to help me.” ",
        "reference": "en-NRSV-25396",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "41",
        "text": "But the Lord answered her, “Martha, Martha, you are worried and distracted by many things; ",
        "reference": "en-NRSV-25397",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "10",
        "verse": "42",
        "text": "there is need of only one thing. Mary has chosen the better part, which will not be taken away from her.”",
        "reference": "en-NRSV-25398",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "1",
        "text": "He was praying in a certain place, and after he had finished, one of his disciples said to him, “Lord, teach us to pray, as John taught his disciples.” ",
        "headerReference": "en-NRSV-25399",
        "title": "\nThe Lord’s Prayer\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "2",
        "text": "He said to them, “When you pray, say: \nFather, hallowed be your name.    \n \nYour kingdom come.\n",
        "reference": "en-NRSV-25400",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "3",
        "text": "\nGive us each day our daily bread.",
        "reference": "en-NRSV-25401",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "4",
        "text": "\nAnd forgive us our sins, \nfor we ourselves forgive everyone indebted to us.\n \nAnd do not bring us to the time of trial.”\n",
        "reference": "en-NRSV-25402",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "5",
        "text": "\nAnd he said to them, “Suppose one of you has a friend, and you go to him at midnight and say to him, ‘Friend, lend me three loaves of bread; \n",
        "headerReference": "en-NRSV-25403",
        "title": "\nPerseverance in Prayer\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "6",
        "text": "for a friend of mine has arrived, and I have nothing to set before him.’ ",
        "reference": "en-NRSV-25404",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "7",
        "text": "And he answers from within, ‘Do not bother me; the door has already been locked, and my children are with me in bed; I cannot get up and give you anything.’ ",
        "reference": "en-NRSV-25405",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "8",
        "text": "I tell you, even though he will not get up and give him anything because he is his friend, at least because of his persistence he will get up and give him whatever he needs.",
        "reference": "en-NRSV-25406",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "9",
        "text": "“So I say to you, Ask, and it will be given you; search, and you will find; knock, and the door will be opened for you. ",
        "reference": "en-NRSV-25407",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "10",
        "text": "For everyone who asks receives, and everyone who searches finds, and for everyone who knocks, the door will be opened. ",
        "reference": "en-NRSV-25408",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "11",
        "text": "Is there anyone among you who, if your child asks for a fish, will give a snake instead of a fish? ",
        "reference": "en-NRSV-25409",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "12",
        "text": "Or if the child asks for an egg, will give a scorpion? ",
        "reference": "en-NRSV-25410",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "13",
        "text": "If you then, who are evil, know how to give good gifts to your children, how much more will the heavenly Father give the Holy Spirit to those who ask him!”",
        "reference": "en-NRSV-25411",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "14",
        "text": "\nNow he was casting out a demon that was mute; when the demon had gone out, the one who had been mute spoke, and the crowds were amazed. \n",
        "headerReference": "en-NRSV-25412",
        "title": "\nJesus and Beelzebul\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "15",
        "text": "But some of them said, “He casts out demons by Beelzebul, the ruler of the demons.” ",
        "reference": "en-NRSV-25413",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "16",
        "text": "Others, to test him, kept demanding from him a sign from heaven. ",
        "reference": "en-NRSV-25414",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "17",
        "text": "But he knew what they were thinking and said to them, “Every kingdom divided against itself becomes a desert, and house falls on house. ",
        "reference": "en-NRSV-25415",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "18",
        "text": "If Satan also is divided against himself, how will his kingdom stand? —for you say that I cast out the demons by Beelzebul. ",
        "reference": "en-NRSV-25416",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "19",
        "text": "Now if I cast out the demons by Beelzebul, by whom do your exorcists cast them out? Therefore they will be your judges. ",
        "reference": "en-NRSV-25417",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "20",
        "text": "But if it is by the finger of God that I cast out the demons, then the kingdom of God has come to you. ",
        "reference": "en-NRSV-25418",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "21",
        "text": "When a strong man, fully armed, guards his castle, his property is safe. ",
        "reference": "en-NRSV-25419",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "22",
        "text": "But when one stronger than he attacks him and overpowers him, he takes away his armor in which he trusted and divides his plunder. ",
        "reference": "en-NRSV-25420",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "23",
        "text": "Whoever is not with me is against me, and whoever does not gather with me scatters.",
        "reference": "en-NRSV-25421",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "24",
        "text": "\n“When the unclean spirit has gone out of a person, it wanders through waterless regions looking for a resting place, but not finding any, it says, ‘I will return to my house from which I came.’ \n",
        "headerReference": "en-NRSV-25422",
        "title": "\nThe Return of the Unclean Spirit\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "25",
        "text": "When it comes, it finds it swept and put in order. ",
        "reference": "en-NRSV-25423",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "26",
        "text": "Then it goes and brings seven other spirits more evil than itself, and they enter and live there; and the last state of that person is worse than the first.”",
        "reference": "en-NRSV-25424",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "27",
        "text": "\nWhile he was saying this, a woman in the crowd raised her voice and said to him, “Blessed is the womb that bore you and the breasts that nursed you!” \n",
        "headerReference": "en-NRSV-25425",
        "title": "\nTrue Blessedness\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "28",
        "text": "But he said, “Blessed rather are those who hear the word of God and obey it!”",
        "reference": "en-NRSV-25426",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "29",
        "text": "\nWhen the crowds were increasing, he began to say, “This generation is an evil generation; it asks for a sign, but no sign will be given to it except the sign of Jonah. \n",
        "headerReference": "en-NRSV-25427",
        "title": "\nThe Sign of Jonah\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "30",
        "text": "For just as Jonah became a sign to the people of Nineveh, so the Son of Man will be to this generation. ",
        "reference": "en-NRSV-25428",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "31",
        "text": "The queen of the South will rise at the judgment with the people of this generation and condemn them, because she came from the ends of the earth to listen to the wisdom of Solomon, and see, something greater than Solomon is here! ",
        "reference": "en-NRSV-25429",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "32",
        "text": "The people of Nineveh will rise up at the judgment with this generation and condemn it, because they repented at the proclamation of Jonah, and see, something greater than Jonah is here!",
        "reference": "en-NRSV-25430",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "33",
        "text": "\n“No one after lighting a lamp puts it in a cellar, but on the lampstand so that those who enter may see the light. \n",
        "headerReference": "en-NRSV-25431",
        "title": "\nThe Light of the Body\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "34",
        "text": "Your eye is the lamp of your body. If your eye is healthy, your whole body is full of light; but if it is not healthy, your body is full of darkness. ",
        "reference": "en-NRSV-25432",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "35",
        "text": "Therefore consider whether the light in you is not darkness. ",
        "reference": "en-NRSV-25433",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "36",
        "text": "If then your whole body is full of light, with no part of it in darkness, it will be as full of light as when a lamp gives you light with its rays.”",
        "reference": "en-NRSV-25434",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "37",
        "text": "\nWhile he was speaking, a Pharisee invited him to dine with him; so he went in and took his place at the table. \n",
        "headerReference": "en-NRSV-25435",
        "title": "\nJesus Denounces Pharisees and Lawyers\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "38",
        "text": "The Pharisee was amazed to see that he did not first wash before dinner. ",
        "reference": "en-NRSV-25436",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "39",
        "text": "Then the Lord said to him, “Now you Pharisees clean the outside of the cup and of the dish, but inside you are full of greed and wickedness. ",
        "reference": "en-NRSV-25437",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "40",
        "text": "You fools! Did not the one who made the outside make the inside also? ",
        "reference": "en-NRSV-25438",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "41",
        "text": "So give for alms those things that are within; and see, everything will be clean for you.",
        "reference": "en-NRSV-25439",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "42",
        "text": "“But woe to you Pharisees! For you tithe mint and rue and herbs of all kinds, and neglect justice and the love of God; it is these you ought to have practiced, without neglecting the others. ",
        "reference": "en-NRSV-25440",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "43",
        "text": "Woe to you Pharisees! For you love to have the seat of honor in the synagogues and to be greeted with respect in the marketplaces. ",
        "reference": "en-NRSV-25441",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "44",
        "text": "Woe to you! For you are like unmarked graves, and people walk over them without realizing it.”",
        "reference": "en-NRSV-25442",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "45",
        "text": "One of the lawyers answered him, “Teacher, when you say these things, you insult us too.” ",
        "reference": "en-NRSV-25443",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "46",
        "text": "And he said, “Woe also to you lawyers! For you load people with burdens hard to bear, and you yourselves do not lift a finger to ease them. ",
        "reference": "en-NRSV-25444",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "47",
        "text": "Woe to you! For you build the tombs of the prophets whom your ancestors killed. ",
        "reference": "en-NRSV-25445",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "48",
        "text": "So you are witnesses and approve of the deeds of your ancestors; for they killed them, and you build their tombs. ",
        "reference": "en-NRSV-25446",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "49",
        "text": "Therefore also the Wisdom of God said, ‘I will send them prophets and apostles, some of whom they will kill and persecute,’ ",
        "reference": "en-NRSV-25447",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "50",
        "text": "so that this generation may be charged with the blood of all the prophets shed since the foundation of the world, ",
        "reference": "en-NRSV-25448",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "51",
        "text": "from the blood of Abel to the blood of Zechariah, who perished between the altar and the sanctuary. Yes, I tell you, it will be charged against this generation. ",
        "reference": "en-NRSV-25449",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "52",
        "text": "Woe to you lawyers! For you have taken away the key of knowledge; you did not enter yourselves, and you hindered those who were entering.”",
        "reference": "en-NRSV-25450",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "53",
        "text": "When he went outside, the scribes and the Pharisees began to be very hostile toward him and to cross-examine him about many things, ",
        "reference": "en-NRSV-25451",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "11",
        "verse": "54",
        "text": "lying in wait for him, to catch him in something he might say.",
        "reference": "en-NRSV-25452",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "1",
        "text": "Meanwhile, when the crowd gathered by the thousands, so that they trampled on one another, he began to speak first to his disciples, “Beware of the yeast of the Pharisees, that is, their hypocrisy. ",
        "headerReference": "en-NRSV-25453",
        "title": "\nA Warning against Hypocrisy\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "2",
        "text": "Nothing is covered up that will not be uncovered, and nothing secret that will not become known. ",
        "reference": "en-NRSV-25454",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "3",
        "text": "Therefore whatever you have said in the dark will be heard in the light, and what you have whispered behind closed doors will be proclaimed from the housetops.",
        "reference": "en-NRSV-25455",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "4",
        "text": "\n“I tell you, my friends, do not fear those who kill the body, and after that can do nothing more. \n",
        "headerReference": "en-NRSV-25456",
        "title": "\nExhortation to Fearless Confession\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "5",
        "text": "But I will warn you whom to fear: fear him who, after he has killed, has authority to cast into hell. Yes, I tell you, fear him! ",
        "reference": "en-NRSV-25457",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "6",
        "text": "Are not five sparrows sold for two pennies? Yet not one of them is forgotten in God’s sight. ",
        "reference": "en-NRSV-25458",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "7",
        "text": "But even the hairs of your head are all counted. Do not be afraid; you are of more value than many sparrows.",
        "reference": "en-NRSV-25459",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "8",
        "text": "“And I tell you, everyone who acknowledges me before others, the Son of Man also will acknowledge before the angels of God; ",
        "reference": "en-NRSV-25460",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "9",
        "text": "but whoever denies me before others will be denied before the angels of God. ",
        "reference": "en-NRSV-25461",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "10",
        "text": "And everyone who speaks a word against the Son of Man will be forgiven; but whoever blasphemes against the Holy Spirit will not be forgiven. ",
        "reference": "en-NRSV-25462",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "11",
        "text": "When they bring you before the synagogues, the rulers, and the authorities, do not worry about how you are to defend yourselves or what you are to say; ",
        "reference": "en-NRSV-25463",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "12",
        "text": "for the Holy Spirit will teach you at that very hour what you ought to say.”",
        "reference": "en-NRSV-25464",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "13",
        "text": "\nSomeone in the crowd said to him, “Teacher, tell my brother to divide the family inheritance with me.” \n",
        "headerReference": "en-NRSV-25465",
        "title": "\nThe Parable of the Rich Fool\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "14",
        "text": "But he said to him, “Friend, who set me to be a judge or arbitrator over you?” ",
        "reference": "en-NRSV-25466",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "15",
        "text": "And he said to them, “Take care! Be on your guard against all kinds of greed; for one’s life does not consist in the abundance of possessions.” ",
        "reference": "en-NRSV-25467",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "16",
        "text": "Then he told them a parable: “The land of a rich man produced abundantly. ",
        "reference": "en-NRSV-25468",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "17",
        "text": "And he thought to himself, ‘What should I do, for I have no place to store my crops?’ ",
        "reference": "en-NRSV-25469",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "18",
        "text": "Then he said, ‘I will do this: I will pull down my barns and build larger ones, and there I will store all my grain and my goods. ",
        "reference": "en-NRSV-25470",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "19",
        "text": "And I will say to my soul, Soul, you have ample goods laid up for many years; relax, eat, drink, be merry.’ ",
        "reference": "en-NRSV-25471",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "20",
        "text": "But God said to him, ‘You fool! This very night your life is being demanded of you. And the things you have prepared, whose will they be?’ ",
        "reference": "en-NRSV-25472",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "21",
        "text": "So it is with those who store up treasures for themselves but are not rich toward God.”",
        "reference": "en-NRSV-25473",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "22",
        "text": "\nHe said to his disciples, “Therefore I tell you, do not worry about your life, what you will eat, or about your body, what you will wear. \n",
        "headerReference": "en-NRSV-25474",
        "title": "\nDo Not Worry\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "23",
        "text": "For life is more than food, and the body more than clothing. ",
        "reference": "en-NRSV-25475",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "24",
        "text": "Consider the ravens: they neither sow nor reap, they have neither storehouse nor barn, and yet God feeds them. Of how much more value are you than the birds! ",
        "reference": "en-NRSV-25476",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "25",
        "text": "And can any of you by worrying add a single hour to your span of life? ",
        "reference": "en-NRSV-25477",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "26",
        "text": "If then you are not able to do so small a thing as that, why do you worry about the rest? ",
        "reference": "en-NRSV-25478",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "27",
        "text": "Consider the lilies, how they grow: they neither toil nor spin; yet I tell you, even Solomon in all his glory was not clothed like one of these. ",
        "reference": "en-NRSV-25479",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "28",
        "text": "But if God so clothes the grass of the field, which is alive today and tomorrow is thrown into the oven, how much more will he clothe you—you of little faith! ",
        "reference": "en-NRSV-25480",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "29",
        "text": "And do not keep striving for what you are to eat and what you are to drink, and do not keep worrying. ",
        "reference": "en-NRSV-25481",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "30",
        "text": "For it is the nations of the world that strive after all these things, and your Father knows that you need them. ",
        "reference": "en-NRSV-25482",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "31",
        "text": "Instead, strive for his kingdom, and these things will be given to you as well.",
        "reference": "en-NRSV-25483",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "32",
        "text": "“Do not be afraid, little flock, for it is your Father’s good pleasure to give you the kingdom. ",
        "reference": "en-NRSV-25484",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "33",
        "text": "Sell your possessions, and give alms. Make purses for yourselves that do not wear out, an unfailing treasure in heaven, where no thief comes near and no moth destroys. ",
        "reference": "en-NRSV-25485",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "34",
        "text": "For where your treasure is, there your heart will be also.",
        "reference": "en-NRSV-25486",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "35",
        "text": "\n“Be dressed for action and have your lamps lit; \n",
        "headerReference": "en-NRSV-25487",
        "title": "\nWatchful Slaves\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "36",
        "text": "be like those who are waiting for their master to return from the wedding banquet, so that they may open the door for him as soon as he comes and knocks. ",
        "reference": "en-NRSV-25488",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "37",
        "text": "Blessed are those slaves whom the master finds alert when he comes; truly I tell you, he will fasten his belt and have them sit down to eat, and he will come and serve them. ",
        "reference": "en-NRSV-25489",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "38",
        "text": "If he comes during the middle of the night, or near dawn, and finds them so, blessed are those slaves.",
        "reference": "en-NRSV-25490",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "39",
        "text": "“But know this: if the owner of the house had known at what hour the thief was coming, he would not have let his house be broken into. ",
        "reference": "en-NRSV-25491",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "40",
        "text": "You also must be ready, for the Son of Man is coming at an unexpected hour.”",
        "reference": "en-NRSV-25492",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "41",
        "text": "\nPeter said, “Lord, are you telling this parable for us or for everyone?” \n",
        "headerReference": "en-NRSV-25493",
        "title": "\nThe Faithful or the Unfaithful Slave\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "42",
        "text": "And the Lord said, “Who then is the faithful and prudent manager whom his master will put in charge of his slaves, to give them their allowance of food at the proper time? ",
        "reference": "en-NRSV-25494",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "43",
        "text": "Blessed is that slave whom his master will find at work when he arrives. ",
        "reference": "en-NRSV-25495",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "44",
        "text": "Truly I tell you, he will put that one in charge of all his possessions. ",
        "reference": "en-NRSV-25496",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "45",
        "text": "But if that slave says to himself, ‘My master is delayed in coming,’ and if he begins to beat the other slaves, men and women, and to eat and drink and get drunk, ",
        "reference": "en-NRSV-25497",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "46",
        "text": "the master of that slave will come on a day when he does not expect him and at an hour that he does not know, and will cut him in pieces, and put him with the unfaithful. ",
        "reference": "en-NRSV-25498",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "47",
        "text": "That slave who knew what his master wanted, but did not prepare himself or do what was wanted, will receive a severe beating. ",
        "reference": "en-NRSV-25499",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "48",
        "text": "But the one who did not know and did what deserved a beating will receive a light beating. From everyone to whom much has been given, much will be required; and from the one to whom much has been entrusted, even more will be demanded.",
        "reference": "en-NRSV-25500",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "49",
        "text": "\n“I came to bring fire to the earth, and how I wish it were already kindled! \n",
        "headerReference": "en-NRSV-25501",
        "title": "\nJesus the Cause of Division\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "50",
        "text": "I have a baptism with which to be baptized, and what stress I am under until it is completed! ",
        "reference": "en-NRSV-25502",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "51",
        "text": "Do you think that I have come to bring peace to the earth? No, I tell you, but rather division! ",
        "reference": "en-NRSV-25503",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "52",
        "text": "From now on five in one household will be divided, three against two and two against three; ",
        "reference": "en-NRSV-25504",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "53",
        "text": "they will be divided: \nfather against son    \n \nand son against father,\n \nmother against daughter    \n \nand daughter against mother,\n \nmother-in-law against her daughter-in-law    \n \nand daughter-in-law against mother-in-law.”\n",
        "reference": "en-NRSV-25505",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "54",
        "text": "\nHe also said to the crowds, “When you see a cloud rising in the west, you immediately say, ‘It is going to rain’; and so it happens. \n",
        "headerReference": "en-NRSV-25506",
        "title": "\nInterpreting the Time\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "55",
        "text": "And when you see the south wind blowing, you say, ‘There will be scorching heat’; and it happens. ",
        "reference": "en-NRSV-25507",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "56",
        "text": "You hypocrites! You know how to interpret the appearance of earth and sky, but why do you not know how to interpret the present time?",
        "reference": "en-NRSV-25508",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "57",
        "text": "\n“And why do you not judge for yourselves what is right? \n",
        "headerReference": "en-NRSV-25509",
        "title": "\nSettling with Your Opponent\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "58",
        "text": "Thus, when you go with your accuser before a magistrate, on the way make an effort to settle the case, or you may be dragged before the judge, and the judge hand you over to the officer, and the officer throw you in prison. ",
        "reference": "en-NRSV-25510",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "12",
        "verse": "59",
        "text": "I tell you, you will never get out until you have paid the very last penny.”",
        "reference": "en-NRSV-25511",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "1",
        "text": "At that very time there were some present who told him about the Galileans whose blood Pilate had mingled with their sacrifices. ",
        "headerReference": "en-NRSV-25512",
        "title": "\nRepent or Perish\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "2",
        "text": "He asked them, “Do you think that because these Galileans suffered in this way they were worse sinners than all other Galileans? ",
        "reference": "en-NRSV-25513",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "3",
        "text": "No, I tell you; but unless you repent, you will all perish as they did. ",
        "reference": "en-NRSV-25514",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "4",
        "text": "Or those eighteen who were killed when the tower of Siloam fell on them—do you think that they were worse offenders than all the others living in Jerusalem? ",
        "reference": "en-NRSV-25515",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "5",
        "text": "No, I tell you; but unless you repent, you will all perish just as they did.”",
        "reference": "en-NRSV-25516",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "6",
        "text": "\nThen he told this parable: “A man had a fig tree planted in his vineyard; and he came looking for fruit on it and found none. \n",
        "headerReference": "en-NRSV-25517",
        "title": "\nThe Parable of the Barren Fig Tree\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "7",
        "text": "So he said to the gardener, ‘See here! For three years I have come looking for fruit on this fig tree, and still I find none. Cut it down! Why should it be wasting the soil?’ ",
        "reference": "en-NRSV-25518",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "8",
        "text": "He replied, ‘Sir, let it alone for one more year, until I dig around it and put manure on it. ",
        "reference": "en-NRSV-25519",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "9",
        "text": "If it bears fruit next year, well and good; but if not, you can cut it down.’”",
        "reference": "en-NRSV-25520",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "10",
        "text": "\nNow he was teaching in one of the synagogues on the sabbath. \n",
        "headerReference": "en-NRSV-25521",
        "title": "\nJesus Heals a Crippled Woman\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "11",
        "text": "And just then there appeared a woman with a spirit that had crippled her for eighteen years. She was bent over and was quite unable to stand up straight. ",
        "reference": "en-NRSV-25522",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "12",
        "text": "When Jesus saw her, he called her over and said, “Woman, you are set free from your ailment.” ",
        "reference": "en-NRSV-25523",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "13",
        "text": "When he laid his hands on her, immediately she stood up straight and began praising God. ",
        "reference": "en-NRSV-25524",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "14",
        "text": "But the leader of the synagogue, indignant because Jesus had cured on the sabbath, kept saying to the crowd, “There are six days on which work ought to be done; come on those days and be cured, and not on the sabbath day.” ",
        "reference": "en-NRSV-25525",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "15",
        "text": "But the Lord answered him and said, “You hypocrites! Does not each of you on the sabbath untie his ox or his donkey from the manger, and lead it away to give it water? ",
        "reference": "en-NRSV-25526",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "16",
        "text": "And ought not this woman, a daughter of Abraham whom Satan bound for eighteen long years, be set free from this bondage on the sabbath day?” ",
        "reference": "en-NRSV-25527",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "17",
        "text": "When he said this, all his opponents were put to shame; and the entire crowd was rejoicing at all the wonderful things that he was doing.",
        "reference": "en-NRSV-25528",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "18",
        "text": "\nHe said therefore, “What is the kingdom of God like? And to what should I compare it? \n",
        "headerReference": "en-NRSV-25529",
        "title": "\nThe Parable of the Mustard Seed\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "19",
        "text": "It is like a mustard seed that someone took and sowed in the garden; it grew and became a tree, and the birds of the air made nests in its branches.”",
        "reference": "en-NRSV-25530",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "20",
        "text": "\nAnd again he said, “To what should I compare the kingdom of God? \n",
        "headerReference": "en-NRSV-25531",
        "title": "\nThe Parable of the Yeast\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "21",
        "text": "It is like yeast that a woman took and mixed in with three measures of flour until all of it was leavened.”",
        "reference": "en-NRSV-25532",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "22",
        "text": "\nJesus went through one town and village after another, teaching as he made his way to Jerusalem. \n",
        "headerReference": "en-NRSV-25533",
        "title": "\nThe Narrow Door\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "23",
        "text": "Someone asked him, “Lord, will only a few be saved?” He said to them, ",
        "reference": "en-NRSV-25534",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "24",
        "text": "“Strive to enter through the narrow door; for many, I tell you, will try to enter and will not be able. ",
        "reference": "en-NRSV-25535",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "25",
        "text": "When once the owner of the house has got up and shut the door, and you begin to stand outside and to knock at the door, saying, ‘Lord, open to us,’ then in reply he will say to you, ‘I do not know where you come from.’ ",
        "reference": "en-NRSV-25536",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "26",
        "text": "Then you will begin to say, ‘We ate and drank with you, and you taught in our streets.’ ",
        "reference": "en-NRSV-25537",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "27",
        "text": "But he will say, ‘I do not know where you come from; go away from me, all you evildoers!’ ",
        "reference": "en-NRSV-25538",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "28",
        "text": "There will be weeping and gnashing of teeth when you see Abraham and Isaac and Jacob and all the prophets in the kingdom of God, and you yourselves thrown out. ",
        "reference": "en-NRSV-25539",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "29",
        "text": "Then people will come from east and west, from north and south, and will eat in the kingdom of God. ",
        "reference": "en-NRSV-25540",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "30",
        "text": "Indeed, some are last who will be first, and some are first who will be last.”",
        "reference": "en-NRSV-25541",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "31",
        "text": "\nAt that very hour some Pharisees came and said to him, “Get away from here, for Herod wants to kill you.” \n",
        "headerReference": "en-NRSV-25542",
        "title": "\nThe Lament over Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "32",
        "text": "He said to them, “Go and tell that fox for me, ‘Listen, I am casting out demons and performing cures today and tomorrow, and on the third day I finish my work. ",
        "reference": "en-NRSV-25543",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "33",
        "text": "Yet today, tomorrow, and the next day I must be on my way, because it is impossible for a prophet to be killed outside of Jerusalem.’ ",
        "reference": "en-NRSV-25544",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "34",
        "text": "Jerusalem, Jerusalem, the city that kills the prophets and stones those who are sent to it! How often have I desired to gather your children together as a hen gathers her brood under her wings, and you were not willing! ",
        "reference": "en-NRSV-25545",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "13",
        "verse": "35",
        "text": "See, your house is left to you. And I tell you, you will not see me until the time comes when you say, ‘Blessed is the one who comes in the name of the Lord.’”",
        "reference": "en-NRSV-25546",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "1",
        "text": "On one occasion when Jesus was going to the house of a leader of the Pharisees to eat a meal on the sabbath, they were watching him closely. ",
        "headerReference": "en-NRSV-25547",
        "title": "\nJesus Heals the Man with Dropsy\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "2",
        "text": "Just then, in front of him, there was a man who had dropsy. ",
        "reference": "en-NRSV-25548",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "3",
        "text": "And Jesus asked the lawyers and Pharisees, “Is it lawful to cure people on the sabbath, or not?” ",
        "reference": "en-NRSV-25549",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "4",
        "text": "But they were silent. So Jesus took him and healed him, and sent him away. ",
        "reference": "en-NRSV-25550",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "5",
        "text": "Then he said to them, “If one of you has a child or an ox that has fallen into a well, will you not immediately pull it out on a sabbath day?” ",
        "reference": "en-NRSV-25551",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "6",
        "text": "And they could not reply to this.",
        "reference": "en-NRSV-25552",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "7",
        "text": "\nWhen he noticed how the guests chose the places of honor, he told them a parable. \n",
        "headerReference": "en-NRSV-25553",
        "title": "\nHumility and Hospitality\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "8",
        "text": "“When you are invited by someone to a wedding banquet, do not sit down at the place of honor, in case someone more distinguished than you has been invited by your host; ",
        "reference": "en-NRSV-25554",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "9",
        "text": "and the host who invited both of you may come and say to you, ‘Give this person your place,’ and then in disgrace you would start to take the lowest place. ",
        "reference": "en-NRSV-25555",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "10",
        "text": "But when you are invited, go and sit down at the lowest place, so that when your host comes, he may say to you, ‘Friend, move up higher’; then you will be honored in the presence of all who sit at the table with you. ",
        "reference": "en-NRSV-25556",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "11",
        "text": "For all who exalt themselves will be humbled, and those who humble themselves will be exalted.”",
        "reference": "en-NRSV-25557",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "12",
        "text": "He said also to the one who had invited him, “When you give a luncheon or a dinner, do not invite your friends or your brothers or your relatives or rich neighbors, in case they may invite you in return, and you would be repaid. ",
        "reference": "en-NRSV-25558",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "13",
        "text": "But when you give a banquet, invite the poor, the crippled, the lame, and the blind. ",
        "reference": "en-NRSV-25559",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "14",
        "text": "And you will be blessed, because they cannot repay you, for you will be repaid at the resurrection of the righteous.”",
        "reference": "en-NRSV-25560",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "15",
        "text": "\nOne of the dinner guests, on hearing this, said to him, “Blessed is anyone who will eat bread in the kingdom of God!” \n",
        "headerReference": "en-NRSV-25561",
        "title": "\nThe Parable of the Great Dinner\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "16",
        "text": "Then Jesus said to him, “Someone gave a great dinner and invited many. ",
        "reference": "en-NRSV-25562",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "17",
        "text": "At the time for the dinner he sent his slave to say to those who had been invited, ‘Come; for everything is ready now.’ ",
        "reference": "en-NRSV-25563",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "18",
        "text": "But they all alike began to make excuses. The first said to him, ‘I have bought a piece of land, and I must go out and see it; please accept my regrets.’ ",
        "reference": "en-NRSV-25564",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "19",
        "text": "Another said, ‘I have bought five yoke of oxen, and I am going to try them out; please accept my regrets.’ ",
        "reference": "en-NRSV-25565",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "20",
        "text": "Another said, ‘I have just been married, and therefore I cannot come.’ ",
        "reference": "en-NRSV-25566",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "21",
        "text": "So the slave returned and reported this to his master. Then the owner of the house became angry and said to his slave, ‘Go out at once into the streets and lanes of the town and bring in the poor, the crippled, the blind, and the lame.’ ",
        "reference": "en-NRSV-25567",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "22",
        "text": "And the slave said, ‘Sir, what you ordered has been done, and there is still room.’ ",
        "reference": "en-NRSV-25568",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "23",
        "text": "Then the master said to the slave, ‘Go out into the roads and lanes, and compel people to come in, so that my house may be filled. ",
        "reference": "en-NRSV-25569",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "24",
        "text": "For I tell you, none of those who were invited will taste my dinner.’”",
        "reference": "en-NRSV-25570",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "25",
        "text": "\nNow large crowds were traveling with him; and he turned and said to them, \n",
        "headerReference": "en-NRSV-25571",
        "title": "\nThe Cost of Discipleship\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "26",
        "text": "“Whoever comes to me and does not hate father and mother, wife and children, brothers and sisters, yes, and even life itself, cannot be my disciple. ",
        "reference": "en-NRSV-25572",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "27",
        "text": "Whoever does not carry the cross and follow me cannot be my disciple. ",
        "reference": "en-NRSV-25573",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "28",
        "text": "For which of you, intending to build a tower, does not first sit down and estimate the cost, to see whether he has enough to complete it? ",
        "reference": "en-NRSV-25574",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "29",
        "text": "Otherwise, when he has laid a foundation and is not able to finish, all who see it will begin to ridicule him, ",
        "reference": "en-NRSV-25575",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "30",
        "text": "saying, ‘This fellow began to build and was not able to finish.’ ",
        "reference": "en-NRSV-25576",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "31",
        "text": "Or what king, going out to wage war against another king, will not sit down first and consider whether he is able with ten thousand to oppose the one who comes against him with twenty thousand? ",
        "reference": "en-NRSV-25577",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "32",
        "text": "If he cannot, then, while the other is still far away, he sends a delegation and asks for the terms of peace. ",
        "reference": "en-NRSV-25578",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "33",
        "text": "So therefore, none of you can become my disciple if you do not give up all your possessions.",
        "reference": "en-NRSV-25579",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "34",
        "text": "\n“Salt is good; but if salt has lost its taste, how can its saltiness be restored? \n",
        "headerReference": "en-NRSV-25580",
        "title": "\nAbout Salt\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "14",
        "verse": "35",
        "text": "It is fit neither for the soil nor for the manure pile; they throw it away. Let anyone with ears to hear listen!”",
        "reference": "en-NRSV-25581",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "1",
        "text": "Now all the tax collectors and sinners were coming near to listen to him. ",
        "headerReference": "en-NRSV-25582",
        "title": "\nThe Parable of the Lost Sheep\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "2",
        "text": "And the Pharisees and the scribes were grumbling and saying, “This fellow welcomes sinners and eats with them.”",
        "reference": "en-NRSV-25583",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "3",
        "text": "So he told them this parable: ",
        "reference": "en-NRSV-25584",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "4",
        "text": "“Which one of you, having a hundred sheep and losing one of them, does not leave the ninety-nine in the wilderness and go after the one that is lost until he finds it? ",
        "reference": "en-NRSV-25585",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "5",
        "text": "When he has found it, he lays it on his shoulders and rejoices. ",
        "reference": "en-NRSV-25586",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "6",
        "text": "And when he comes home, he calls together his friends and neighbors, saying to them, ‘Rejoice with me, for I have found my sheep that was lost.’ ",
        "reference": "en-NRSV-25587",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "7",
        "text": "Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.",
        "reference": "en-NRSV-25588",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "8",
        "text": "\n“Or what woman having ten silver coins, if she loses one of them, does not light a lamp, sweep the house, and search carefully until she finds it? \n",
        "headerReference": "en-NRSV-25589",
        "title": "\nThe Parable of the Lost Coin\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "9",
        "text": "When she has found it, she calls together her friends and neighbors, saying, ‘Rejoice with me, for I have found the coin that I had lost.’ ",
        "reference": "en-NRSV-25590",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "10",
        "text": "Just so, I tell you, there is joy in the presence of the angels of God over one sinner who repents.”",
        "reference": "en-NRSV-25591",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "11",
        "text": "\nThen Jesus said, “There was a man who had two sons. \n",
        "headerReference": "en-NRSV-25592",
        "title": "\nThe Parable of the Prodigal and His Brother\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "12",
        "text": "The younger of them said to his father, ‘Father, give me the share of the property that will belong to me.’ So he divided his property between them. ",
        "reference": "en-NRSV-25593",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "13",
        "text": "A few days later the younger son gathered all he had and traveled to a distant country, and there he squandered his property in dissolute living. ",
        "reference": "en-NRSV-25594",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "14",
        "text": "When he had spent everything, a severe famine took place throughout that country, and he began to be in need. ",
        "reference": "en-NRSV-25595",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "15",
        "text": "So he went and hired himself out to one of the citizens of that country, who sent him to his fields to feed the pigs. ",
        "reference": "en-NRSV-25596",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "16",
        "text": "He would gladly have filled himself with the pods that the pigs were eating; and no one gave him anything. ",
        "reference": "en-NRSV-25597",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "17",
        "text": "But when he came to himself he said, ‘How many of my father’s hired hands have bread enough and to spare, but here I am dying of hunger! ",
        "reference": "en-NRSV-25598",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "18",
        "text": "I will get up and go to my father, and I will say to him, “Father, I have sinned against heaven and before you; ",
        "reference": "en-NRSV-25599",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "19",
        "text": "I am no longer worthy to be called your son; treat me like one of your hired hands.”’ ",
        "reference": "en-NRSV-25600",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "20",
        "text": "So he set off and went to his father. But while he was still far off, his father saw him and was filled with compassion; he ran and put his arms around him and kissed him. ",
        "reference": "en-NRSV-25601",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "21",
        "text": "Then the son said to him, ‘Father, I have sinned against heaven and before you; I am no longer worthy to be called your son.’ ",
        "reference": "en-NRSV-25602",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "22",
        "text": "But the father said to his slaves, ‘Quickly, bring out a robe—the best one—and put it on him; put a ring on his finger and sandals on his feet. ",
        "reference": "en-NRSV-25603",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "23",
        "text": "And get the fatted calf and kill it, and let us eat and celebrate; ",
        "reference": "en-NRSV-25604",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "24",
        "text": "for this son of mine was dead and is alive again; he was lost and is found!’ And they began to celebrate.",
        "reference": "en-NRSV-25605",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "25",
        "text": "“Now his elder son was in the field; and when he came and approached the house, he heard music and dancing. ",
        "reference": "en-NRSV-25606",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "26",
        "text": "He called one of the slaves and asked what was going on. ",
        "reference": "en-NRSV-25607",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "27",
        "text": "He replied, ‘Your brother has come, and your father has killed the fatted calf, because he has got him back safe and sound.’ ",
        "reference": "en-NRSV-25608",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "28",
        "text": "Then he became angry and refused to go in. His father came out and began to plead with him. ",
        "reference": "en-NRSV-25609",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "29",
        "text": "But he answered his father, ‘Listen! For all these years I have been working like a slave for you, and I have never disobeyed your command; yet you have never given me even a young goat so that I might celebrate with my friends. ",
        "reference": "en-NRSV-25610",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "30",
        "text": "But when this son of yours came back, who has devoured your property with prostitutes, you killed the fatted calf for him!’ ",
        "reference": "en-NRSV-25611",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "31",
        "text": "Then the father said to him, ‘Son, you are always with me, and all that is mine is yours. ",
        "reference": "en-NRSV-25612",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "15",
        "verse": "32",
        "text": "But we had to celebrate and rejoice, because this brother of yours was dead and has come to life; he was lost and has been found.’”",
        "reference": "en-NRSV-25613",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "1",
        "text": "Then Jesus said to the disciples, “There was a rich man who had a manager, and charges were brought to him that this man was squandering his property. ",
        "headerReference": "en-NRSV-25614",
        "title": "\nThe Parable of the Dishonest Manager\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "2",
        "text": "So he summoned him and said to him, ‘What is this that I hear about you? Give me an accounting of your management, because you cannot be my manager any longer.’ ",
        "reference": "en-NRSV-25615",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "3",
        "text": "Then the manager said to himself, ‘What will I do, now that my master is taking the position away from me? I am not strong enough to dig, and I am ashamed to beg. ",
        "reference": "en-NRSV-25616",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "4",
        "text": "I have decided what to do so that, when I am dismissed as manager, people may welcome me into their homes.’ ",
        "reference": "en-NRSV-25617",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "5",
        "text": "So, summoning his master’s debtors one by one, he asked the first, ‘How much do you owe my master?’ ",
        "reference": "en-NRSV-25618",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "6",
        "text": "He answered, ‘A hundred jugs of olive oil.’ He said to him, ‘Take your bill, sit down quickly, and make it fifty.’ ",
        "reference": "en-NRSV-25619",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "7",
        "text": "Then he asked another, ‘And how much do you owe?’ He replied, ‘A hundred containers of wheat.’ He said to him, ‘Take your bill and make it eighty.’ ",
        "reference": "en-NRSV-25620",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "8",
        "text": "And his master commended the dishonest manager because he had acted shrewdly; for the children of this age are more shrewd in dealing with their own generation than are the children of light. ",
        "reference": "en-NRSV-25621",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "9",
        "text": "And I tell you, make friends for yourselves by means of dishonest wealth so that when it is gone, they may welcome you into the eternal homes.",
        "reference": "en-NRSV-25622",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "10",
        "text": "“Whoever is faithful in a very little is faithful also in much; and whoever is dishonest in a very little is dishonest also in much. ",
        "reference": "en-NRSV-25623",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "11",
        "text": "If then you have not been faithful with the dishonest wealth, who will entrust to you the true riches? ",
        "reference": "en-NRSV-25624",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "12",
        "text": "And if you have not been faithful with what belongs to another, who will give you what is your own? ",
        "reference": "en-NRSV-25625",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "13",
        "text": "No slave can serve two masters; for a slave will either hate the one and love the other, or be devoted to the one and despise the other. You cannot serve God and wealth.”",
        "reference": "en-NRSV-25626",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "14",
        "text": "\nThe Pharisees, who were lovers of money, heard all this, and they ridiculed him. \n",
        "headerReference": "en-NRSV-25627",
        "title": "\nThe Law and the Kingdom of God\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "15",
        "text": "So he said to them, “You are those who justify yourselves in the sight of others; but God knows your hearts; for what is prized by human beings is an abomination in the sight of God.",
        "reference": "en-NRSV-25628",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "16",
        "text": "“The law and the prophets were in effect until John came; since then the good news of the kingdom of God is proclaimed, and everyone tries to enter it by force. ",
        "reference": "en-NRSV-25629",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "17",
        "text": "But it is easier for heaven and earth to pass away, than for one stroke of a letter in the law to be dropped.",
        "reference": "en-NRSV-25630",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "18",
        "text": "“Anyone who divorces his wife and marries another commits adultery, and whoever marries a woman divorced from her husband commits adultery.",
        "reference": "en-NRSV-25631",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "19",
        "text": "\n“There was a rich man who was dressed in purple and fine linen and who feasted sumptuously every day. \n",
        "headerReference": "en-NRSV-25632",
        "title": "\nThe Rich Man and Lazarus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "20",
        "text": "And at his gate lay a poor man named Lazarus, covered with sores, ",
        "reference": "en-NRSV-25633",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "21",
        "text": "who longed to satisfy his hunger with what fell from the rich man’s table; even the dogs would come and lick his sores. ",
        "reference": "en-NRSV-25634",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "22",
        "text": "The poor man died and was carried away by the angels to be with Abraham. The rich man also died and was buried. ",
        "reference": "en-NRSV-25635",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "23",
        "text": "In Hades, where he was being tormented, he looked up and saw Abraham far away with Lazarus by his side. ",
        "reference": "en-NRSV-25636",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "24",
        "text": "He called out, ‘Father Abraham, have mercy on me, and send Lazarus to dip the tip of his finger in water and cool my tongue; for I am in agony in these flames.’ ",
        "reference": "en-NRSV-25637",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "25",
        "text": "But Abraham said, ‘Child, remember that during your lifetime you received your good things, and Lazarus in like manner evil things; but now he is comforted here, and you are in agony. ",
        "reference": "en-NRSV-25638",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "26",
        "text": "Besides all this, between you and us a great chasm has been fixed, so that those who might want to pass from here to you cannot do so, and no one can cross from there to us.’ ",
        "reference": "en-NRSV-25639",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "27",
        "text": "He said, ‘Then, father, I beg you to send him to my father’s house— ",
        "reference": "en-NRSV-25640",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "28",
        "text": "for I have five brothers—that he may warn them, so that they will not also come into this place of torment.’ ",
        "reference": "en-NRSV-25641",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "29",
        "text": "Abraham replied, ‘They have Moses and the prophets; they should listen to them.’ ",
        "reference": "en-NRSV-25642",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "30",
        "text": "He said, ‘No, father Abraham; but if someone goes to them from the dead, they will repent.’ ",
        "reference": "en-NRSV-25643",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "16",
        "verse": "31",
        "text": "He said to him, ‘If they do not listen to Moses and the prophets, neither will they be convinced even if someone rises from the dead.’”",
        "reference": "en-NRSV-25644",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "1",
        "text": "Jesus said to his disciples, “Occasions for stumbling are bound to come, but woe to anyone by whom they come! ",
        "headerReference": "en-NRSV-25645",
        "title": "\nSome Sayings of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "2",
        "text": "It would be better for you if a millstone were hung around your neck and you were thrown into the sea than for you to cause one of these little ones to stumble. ",
        "reference": "en-NRSV-25646",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "3",
        "text": "Be on your guard! If another disciple sins, you must rebuke the offender, and if there is repentance, you must forgive. ",
        "reference": "en-NRSV-25647",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "4",
        "text": "And if the same person sins against you seven times a day, and turns back to you seven times and says, ‘I repent,’ you must forgive.”",
        "reference": "en-NRSV-25648",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "5",
        "text": "The apostles said to the Lord, “Increase our faith!” ",
        "reference": "en-NRSV-25649",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "6",
        "text": "The Lord replied, “If you had faith the size of a mustard seed, you could say to this mulberry tree, ‘Be uprooted and planted in the sea,’ and it would obey you.",
        "reference": "en-NRSV-25650",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "7",
        "text": "“Who among you would say to your slave who has just come in from plowing or tending sheep in the field, ‘Come here at once and take your place at the table’? ",
        "reference": "en-NRSV-25651",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "8",
        "text": "Would you not rather say to him, ‘Prepare supper for me, put on your apron and serve me while I eat and drink; later you may eat and drink’? ",
        "reference": "en-NRSV-25652",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "9",
        "text": "Do you thank the slave for doing what was commanded? ",
        "reference": "en-NRSV-25653",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "10",
        "text": "So you also, when you have done all that you were ordered to do, say, ‘We are worthless slaves; we have done only what we ought to have done!’”",
        "reference": "en-NRSV-25654",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "11",
        "text": "\nOn the way to Jerusalem Jesus was going through the region between Samaria and Galilee. \n",
        "headerReference": "en-NRSV-25655",
        "title": "\nJesus Cleanses Ten Lepers\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "12",
        "text": "As he entered a village, ten lepers approached him. Keeping their distance, ",
        "reference": "en-NRSV-25656",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "13",
        "text": "they called out, saying, “Jesus, Master, have mercy on us!” ",
        "reference": "en-NRSV-25657",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "14",
        "text": "When he saw them, he said to them, “Go and show yourselves to the priests.” And as they went, they were made clean. ",
        "reference": "en-NRSV-25658",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "15",
        "text": "Then one of them, when he saw that he was healed, turned back, praising God with a loud voice. ",
        "reference": "en-NRSV-25659",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "16",
        "text": "He prostrated himself at Jesus’ feet and thanked him. And he was a Samaritan. ",
        "reference": "en-NRSV-25660",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "17",
        "text": "Then Jesus asked, “Were not ten made clean? But the other nine, where are they? ",
        "reference": "en-NRSV-25661",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "18",
        "text": "Was none of them found to return and give praise to God except this foreigner?” ",
        "reference": "en-NRSV-25662",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "19",
        "text": "Then he said to him, “Get up and go on your way; your faith has made you well.”",
        "reference": "en-NRSV-25663",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "20",
        "text": "\nOnce Jesus was asked by the Pharisees when the kingdom of God was coming, and he answered, “The kingdom of God is not coming with things that can be observed; \n",
        "headerReference": "en-NRSV-25664",
        "title": "\nThe Coming of the Kingdom\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "21",
        "text": "nor will they say, ‘Look, here it is!’ or ‘There it is!’ For, in fact, the kingdom of God is among you.”",
        "reference": "en-NRSV-25665",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "22",
        "text": "Then he said to the disciples, “The days are coming when you will long to see one of the days of the Son of Man, and you will not see it. ",
        "reference": "en-NRSV-25666",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "23",
        "text": "They will say to you, ‘Look there!’ or ‘Look here!’ Do not go, do not set off in pursuit. ",
        "reference": "en-NRSV-25667",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "24",
        "text": "For as the lightning flashes and lights up the sky from one side to the other, so will the Son of Man be in his day. ",
        "reference": "en-NRSV-25668",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "25",
        "text": "But first he must endure much suffering and be rejected by this generation. ",
        "reference": "en-NRSV-25669",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "26",
        "text": "Just as it was in the days of Noah, so too it will be in the days of the Son of Man. ",
        "reference": "en-NRSV-25670",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "27",
        "text": "They were eating and drinking, and marrying and being given in marriage, until the day Noah entered the ark, and the flood came and destroyed all of them. ",
        "reference": "en-NRSV-25671",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "28",
        "text": "Likewise, just as it was in the days of Lot: they were eating and drinking, buying and selling, planting and building, ",
        "reference": "en-NRSV-25672",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "29",
        "text": "but on the day that Lot left Sodom, it rained fire and sulfur from heaven and destroyed all of them ",
        "reference": "en-NRSV-25673",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "30",
        "text": "—it will be like that on the day that the Son of Man is revealed. ",
        "reference": "en-NRSV-25674",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "31",
        "text": "On that day, anyone on the housetop who has belongings in the house must not come down to take them away; and likewise anyone in the field must not turn back. ",
        "reference": "en-NRSV-25675",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "32",
        "text": "Remember Lot’s wife. ",
        "reference": "en-NRSV-25676",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "33",
        "text": "Those who try to make their life secure will lose it, but those who lose their life will keep it. ",
        "reference": "en-NRSV-25677",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "34",
        "text": "I tell you, on that night there will be two in one bed; one will be taken and the other left. ",
        "reference": "en-NRSV-25678",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "35",
        "text": "There will be two women grinding meal together; one will be taken and the other left.” ",
        "reference": "en-NRSV-25679",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "17",
        "verse": "37",
        "text": "Then they asked him, “Where, Lord?” He said to them, “Where the corpse is, there the vultures will gather.”",
        "reference": "en-NRSV-25680",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "1",
        "text": "Then Jesus told them a parable about their need to pray always and not to lose heart. ",
        "headerReference": "en-NRSV-25681",
        "title": "\nThe Parable of the Widow and the Unjust Judge\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "2",
        "text": "He said, “In a certain city there was a judge who neither feared God nor had respect for people. ",
        "reference": "en-NRSV-25682",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "3",
        "text": "In that city there was a widow who kept coming to him and saying, ‘Grant me justice against my opponent.’ ",
        "reference": "en-NRSV-25683",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "4",
        "text": "For a while he refused; but later he said to himself, ‘Though I have no fear of God and no respect for anyone, ",
        "reference": "en-NRSV-25684",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "5",
        "text": "yet because this widow keeps bothering me, I will grant her justice, so that she may not wear me out by continually coming.’” ",
        "reference": "en-NRSV-25685",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "6",
        "text": "And the Lord said, “Listen to what the unjust judge says. ",
        "reference": "en-NRSV-25686",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "7",
        "text": "And will not God grant justice to his chosen ones who cry to him day and night? Will he delay long in helping them? ",
        "reference": "en-NRSV-25687",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "8",
        "text": "I tell you, he will quickly grant justice to them. And yet, when the Son of Man comes, will he find faith on earth?”",
        "reference": "en-NRSV-25688",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "9",
        "text": "\nHe also told this parable to some who trusted in themselves that they were righteous and regarded others with contempt: \n",
        "headerReference": "en-NRSV-25689",
        "title": "\nThe Parable of the Pharisee and the Tax Collector\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "10",
        "text": "“Two men went up to the temple to pray, one a Pharisee and the other a tax collector. ",
        "reference": "en-NRSV-25690",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "11",
        "text": "The Pharisee, standing by himself, was praying thus, ‘God, I thank you that I am not like other people: thieves, rogues, adulterers, or even like this tax collector. ",
        "reference": "en-NRSV-25691",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "12",
        "text": "I fast twice a week; I give a tenth of all my income.’ ",
        "reference": "en-NRSV-25692",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "13",
        "text": "But the tax collector, standing far off, would not even look up to heaven, but was beating his breast and saying, ‘God, be merciful to me, a sinner!’ ",
        "reference": "en-NRSV-25693",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "14",
        "text": "I tell you, this man went down to his home justified rather than the other; for all who exalt themselves will be humbled, but all who humble themselves will be exalted.”",
        "reference": "en-NRSV-25694",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "15",
        "text": "\nPeople were bringing even infants to him that he might touch them; and when the disciples saw it, they sternly ordered them not to do it. \n",
        "headerReference": "en-NRSV-25695",
        "title": "\nJesus Blesses Little Children\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "16",
        "text": "But Jesus called for them and said, “Let the little children come to me, and do not stop them; for it is to such as these that the kingdom of God belongs. ",
        "reference": "en-NRSV-25696",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "17",
        "text": "Truly I tell you, whoever does not receive the kingdom of God as a little child will never enter it.”",
        "reference": "en-NRSV-25697",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "18",
        "text": "\nA certain ruler asked him, “Good Teacher, what must I do to inherit eternal life?” \n",
        "headerReference": "en-NRSV-25698",
        "title": "\nThe Rich Ruler\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "19",
        "text": "Jesus said to him, “Why do you call me good? No one is good but God alone. ",
        "reference": "en-NRSV-25699",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "20",
        "text": "You know the commandments: ‘You shall not commit adultery; You shall not murder; You shall not steal; You shall not bear false witness; Honor your father and mother.’” ",
        "reference": "en-NRSV-25700",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "21",
        "text": "He replied, “I have kept all these since my youth.” ",
        "reference": "en-NRSV-25701",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "22",
        "text": "When Jesus heard this, he said to him, “There is still one thing lacking. Sell all that you own and distribute the money to the poor, and you will have treasure in heaven; then come, follow me.” ",
        "reference": "en-NRSV-25702",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "23",
        "text": "But when he heard this, he became sad; for he was very rich. ",
        "reference": "en-NRSV-25703",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "24",
        "text": "Jesus looked at him and said, “How hard it is for those who have wealth to enter the kingdom of God! ",
        "reference": "en-NRSV-25704",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "25",
        "text": "Indeed, it is easier for a camel to go through the eye of a needle than for someone who is rich to enter the kingdom of God.”",
        "reference": "en-NRSV-25705",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "26",
        "text": "Those who heard it said, “Then who can be saved?” ",
        "reference": "en-NRSV-25706",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "27",
        "text": "He replied, “What is impossible for mortals is possible for God.”",
        "reference": "en-NRSV-25707",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "28",
        "text": "Then Peter said, “Look, we have left our homes and followed you.” ",
        "reference": "en-NRSV-25708",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "29",
        "text": "And he said to them, “Truly I tell you, there is no one who has left house or wife or brothers or parents or children, for the sake of the kingdom of God, ",
        "reference": "en-NRSV-25709",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "30",
        "text": "who will not get back very much more in this age, and in the age to come eternal life.”",
        "reference": "en-NRSV-25710",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "31",
        "text": "\nThen he took the twelve aside and said to them, “See, we are going up to Jerusalem, and everything that is written about the Son of Man by the prophets will be accomplished. \n",
        "headerReference": "en-NRSV-25711",
        "title": "\nA Third Time Jesus Foretells His Death and Resurrection\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "32",
        "text": "For he will be handed over to the Gentiles; and he will be mocked and insulted and spat upon. ",
        "reference": "en-NRSV-25712",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "33",
        "text": "After they have flogged him, they will kill him, and on the third day he will rise again.” ",
        "reference": "en-NRSV-25713",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "34",
        "text": "But they understood nothing about all these things; in fact, what he said was hidden from them, and they did not grasp what was said.",
        "reference": "en-NRSV-25714",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "35",
        "text": "\nAs he approached Jericho, a blind man was sitting by the roadside begging. \n",
        "headerReference": "en-NRSV-25715",
        "title": "\nJesus Heals a Blind Beggar Near Jericho\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "36",
        "text": "When he heard a crowd going by, he asked what was happening. ",
        "reference": "en-NRSV-25716",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "37",
        "text": "They told him, “Jesus of Nazareth is passing by.” ",
        "reference": "en-NRSV-25717",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "38",
        "text": "Then he shouted, “Jesus, Son of David, have mercy on me!” ",
        "reference": "en-NRSV-25718",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "39",
        "text": "Those who were in front sternly ordered him to be quiet; but he shouted even more loudly, “Son of David, have mercy on me!” ",
        "reference": "en-NRSV-25719",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "40",
        "text": "Jesus stood still and ordered the man to be brought to him; and when he came near, he asked him, ",
        "reference": "en-NRSV-25720",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "41",
        "text": "“What do you want me to do for you?” He said, “Lord, let me see again.” ",
        "reference": "en-NRSV-25721",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "42",
        "text": "Jesus said to him, “Receive your sight; your faith has saved you.” ",
        "reference": "en-NRSV-25722",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "18",
        "verse": "43",
        "text": "Immediately he regained his sight and followed him, glorifying God; and all the people, when they saw it, praised God.",
        "reference": "en-NRSV-25723",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "1",
        "text": "He entered Jericho and was passing through it. ",
        "headerReference": "en-NRSV-25724",
        "title": "\nJesus and Zacchaeus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "2",
        "text": "A man was there named Zacchaeus; he was a chief tax collector and was rich. ",
        "reference": "en-NRSV-25725",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "3",
        "text": "He was trying to see who Jesus was, but on account of the crowd he could not, because he was short in stature. ",
        "reference": "en-NRSV-25726",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "4",
        "text": "So he ran ahead and climbed a sycamore tree to see him, because he was going to pass that way. ",
        "reference": "en-NRSV-25727",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "5",
        "text": "When Jesus came to the place, he looked up and said to him, “Zacchaeus, hurry and come down; for I must stay at your house today.” ",
        "reference": "en-NRSV-25728",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "6",
        "text": "So he hurried down and was happy to welcome him. ",
        "reference": "en-NRSV-25729",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "7",
        "text": "All who saw it began to grumble and said, “He has gone to be the guest of one who is a sinner.” ",
        "reference": "en-NRSV-25730",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "8",
        "text": "Zacchaeus stood there and said to the Lord, “Look, half of my possessions, Lord, I will give to the poor; and if I have defrauded anyone of anything, I will pay back four times as much.” ",
        "reference": "en-NRSV-25731",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "9",
        "text": "Then Jesus said to him, “Today salvation has come to this house, because he too is a son of Abraham. ",
        "reference": "en-NRSV-25732",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "10",
        "text": "For the Son of Man came to seek out and to save the lost.”",
        "reference": "en-NRSV-25733",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "11",
        "text": "\nAs they were listening to this, he went on to tell a parable, because he was near Jerusalem, and because they supposed that the kingdom of God was to appear immediately. \n",
        "headerReference": "en-NRSV-25734",
        "title": "\nThe Parable of the Ten Pounds\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "12",
        "text": "So he said, “A nobleman went to a distant country to get royal power for himself and then return. ",
        "reference": "en-NRSV-25735",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "13",
        "text": "He summoned ten of his slaves, and gave them ten pounds, and said to them, ‘Do business with these until I come back.’ ",
        "reference": "en-NRSV-25736",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "14",
        "text": "But the citizens of his country hated him and sent a delegation after him, saying, ‘We do not want this man to rule over us.’ ",
        "reference": "en-NRSV-25737",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "15",
        "text": "When he returned, having received royal power, he ordered these slaves, to whom he had given the money, to be summoned so that he might find out what they had gained by trading. ",
        "reference": "en-NRSV-25738",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "16",
        "text": "The first came forward and said, ‘Lord, your pound has made ten more pounds.’ ",
        "reference": "en-NRSV-25739",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "17",
        "text": "He said to him, ‘Well done, good slave! Because you have been trustworthy in a very small thing, take charge of ten cities.’ ",
        "reference": "en-NRSV-25740",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "18",
        "text": "Then the second came, saying, ‘Lord, your pound has made five pounds.’ ",
        "reference": "en-NRSV-25741",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "19",
        "text": "He said to him, ‘And you, rule over five cities.’ ",
        "reference": "en-NRSV-25742",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "20",
        "text": "Then the other came, saying, ‘Lord, here is your pound. I wrapped it up in a piece of cloth, ",
        "reference": "en-NRSV-25743",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "21",
        "text": "for I was afraid of you, because you are a harsh man; you take what you did not deposit, and reap what you did not sow.’ ",
        "reference": "en-NRSV-25744",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "22",
        "text": "He said to him, ‘I will judge you by your own words, you wicked slave! You knew, did you, that I was a harsh man, taking what I did not deposit and reaping what I did not sow? ",
        "reference": "en-NRSV-25745",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "23",
        "text": "Why then did you not put my money into the bank? Then when I returned, I could have collected it with interest.’ ",
        "reference": "en-NRSV-25746",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "24",
        "text": "He said to the bystanders, ‘Take the pound from him and give it to the one who has ten pounds.’ ",
        "reference": "en-NRSV-25747",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "25",
        "text": "(And they said to him, ‘Lord, he has ten pounds!’) ",
        "reference": "en-NRSV-25748",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "26",
        "text": "‘I tell you, to all those who have, more will be given; but from those who have nothing, even what they have will be taken away. ",
        "reference": "en-NRSV-25749",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "27",
        "text": "But as for these enemies of mine who did not want me to be king over them—bring them here and slaughter them in my presence.’”",
        "reference": "en-NRSV-25750",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "28",
        "text": "\nAfter he had said this, he went on ahead, going up to Jerusalem.\n",
        "headerReference": "en-NRSV-25751",
        "title": "\nJesus’ Triumphal Entry into Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "29",
        "text": "When he had come near Bethphage and Bethany, at the place called the Mount of Olives, he sent two of the disciples, ",
        "reference": "en-NRSV-25752",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "30",
        "text": "saying, “Go into the village ahead of you, and as you enter it you will find tied there a colt that has never been ridden. Untie it and bring it here. ",
        "reference": "en-NRSV-25753",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "31",
        "text": "If anyone asks you, ‘Why are you untying it?’ just say this, ‘The Lord needs it.’” ",
        "reference": "en-NRSV-25754",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "32",
        "text": "So those who were sent departed and found it as he had told them. ",
        "reference": "en-NRSV-25755",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "33",
        "text": "As they were untying the colt, its owners asked them, “Why are you untying the colt?” ",
        "reference": "en-NRSV-25756",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "34",
        "text": "They said, “The Lord needs it.” ",
        "reference": "en-NRSV-25757",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "35",
        "text": "Then they brought it to Jesus; and after throwing their cloaks on the colt, they set Jesus on it. ",
        "reference": "en-NRSV-25758",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "36",
        "text": "As he rode along, people kept spreading their cloaks on the road. ",
        "reference": "en-NRSV-25759",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "37",
        "text": "As he was now approaching the path down from the Mount of Olives, the whole multitude of the disciples began to praise God joyfully with a loud voice for all the deeds of power that they had seen, ",
        "reference": "en-NRSV-25760",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "38",
        "text": "saying, \n“Blessed is the king    \n \nwho comes in the name of the Lord!\n \nPeace in heaven,    \n \nand glory in the highest heaven!”\n",
        "reference": "en-NRSV-25761",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "39",
        "text": "Some of the Pharisees in the crowd said to him, “Teacher, order your disciples to stop.” ",
        "reference": "en-NRSV-25762",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "40",
        "text": "He answered, “I tell you, if these were silent, the stones would shout out.”",
        "reference": "en-NRSV-25763",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "41",
        "text": "\nAs he came near and saw the city, he wept over it, \n",
        "headerReference": "en-NRSV-25764",
        "title": "\nJesus Weeps over Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "42",
        "text": "saying, “If you, even you, had only recognized on this day the things that make for peace! But now they are hidden from your eyes. ",
        "reference": "en-NRSV-25765",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "43",
        "text": "Indeed, the days will come upon you, when your enemies will set up ramparts around you and surround you, and hem you in on every side. ",
        "reference": "en-NRSV-25766",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "44",
        "text": "They will crush you to the ground, you and your children within you, and they will not leave within you one stone upon another; because you did not recognize the time of your visitation from God.”",
        "reference": "en-NRSV-25767",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "45",
        "text": "\nThen he entered the temple and began to drive out those who were selling things there; \n",
        "headerReference": "en-NRSV-25768",
        "title": "\nJesus Cleanses the Temple\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "46",
        "text": "and he said, “It is written, \n‘My house shall be a house of prayer’;    \n \nbut you have made it a den of robbers.”\n",
        "reference": "en-NRSV-25769",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "47",
        "text": "Every day he was teaching in the temple. The chief priests, the scribes, and the leaders of the people kept looking for a way to kill him; ",
        "reference": "en-NRSV-25770",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "19",
        "verse": "48",
        "text": "but they did not find anything they could do, for all the people were spellbound by what they heard.",
        "reference": "en-NRSV-25771",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "1",
        "text": "One day, as he was teaching the people in the temple and telling the good news, the chief priests and the scribes came with the elders ",
        "headerReference": "en-NRSV-25772",
        "title": "\nThe Authority of Jesus Questioned\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "2",
        "text": "and said to him, “Tell us, by what authority are you doing these things? Who is it who gave you this authority?” ",
        "reference": "en-NRSV-25773",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "3",
        "text": "He answered them, “I will also ask you a question, and you tell me: ",
        "reference": "en-NRSV-25774",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "4",
        "text": "Did the baptism of John come from heaven, or was it of human origin?” ",
        "reference": "en-NRSV-25775",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "5",
        "text": "They discussed it with one another, saying, “If we say, ‘From heaven,’ he will say, ‘Why did you not believe him?’ ",
        "reference": "en-NRSV-25776",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "6",
        "text": "But if we say, ‘Of human origin,’ all the people will stone us; for they are convinced that John was a prophet.” ",
        "reference": "en-NRSV-25777",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "7",
        "text": "So they answered that they did not know where it came from. ",
        "reference": "en-NRSV-25778",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "8",
        "text": "Then Jesus said to them, “Neither will I tell you by what authority I am doing these things.”",
        "reference": "en-NRSV-25779",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "9",
        "text": "\nHe began to tell the people this parable: “A man planted a vineyard, and leased it to tenants, and went to another country for a long time. \n",
        "headerReference": "en-NRSV-25780",
        "title": "\nThe Parable of the Wicked Tenants\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "10",
        "text": "When the season came, he sent a slave to the tenants in order that they might give him his share of the produce of the vineyard; but the tenants beat him and sent him away empty-handed. ",
        "reference": "en-NRSV-25781",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "11",
        "text": "Next he sent another slave; that one also they beat and insulted and sent away empty-handed. ",
        "reference": "en-NRSV-25782",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "12",
        "text": "And he sent still a third; this one also they wounded and threw out. ",
        "reference": "en-NRSV-25783",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "13",
        "text": "Then the owner of the vineyard said, ‘What shall I do? I will send my beloved son; perhaps they will respect him.’ ",
        "reference": "en-NRSV-25784",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "14",
        "text": "But when the tenants saw him, they discussed it among themselves and said, ‘This is the heir; let us kill him so that the inheritance may be ours.’ ",
        "reference": "en-NRSV-25785",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "15",
        "text": "So they threw him out of the vineyard and killed him. What then will the owner of the vineyard do to them? ",
        "reference": "en-NRSV-25786",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "16",
        "text": "He will come and destroy those tenants and give the vineyard to others.” When they heard this, they said, “Heaven forbid!” ",
        "reference": "en-NRSV-25787",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "17",
        "text": "But he looked at them and said, “What then does this text mean: \n‘The stone that the builders rejected    \n \nhas become the cornerstone’?\n",
        "reference": "en-NRSV-25788",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "18",
        "text": "Everyone who falls on that stone will be broken to pieces; and it will crush anyone on whom it falls.” ",
        "reference": "en-NRSV-25789",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "19",
        "text": "When the scribes and chief priests realized that he had told this parable against them, they wanted to lay hands on him at that very hour, but they feared the people.",
        "reference": "en-NRSV-25790",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "20",
        "text": "\nSo they watched him and sent spies who pretended to be honest, in order to trap him by what he said, so as to hand him over to the jurisdiction and authority of the governor. \n",
        "headerReference": "en-NRSV-25791",
        "title": "\nThe Question about Paying Taxes\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "21",
        "text": "So they asked him, “Teacher, we know that you are right in what you say and teach, and you show deference to no one, but teach the way of God in accordance with truth. ",
        "reference": "en-NRSV-25792",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "22",
        "text": "Is it lawful for us to pay taxes to the emperor, or not?” ",
        "reference": "en-NRSV-25793",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "23",
        "text": "But he perceived their craftiness and said to them, ",
        "reference": "en-NRSV-25794",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "24",
        "text": "“Show me a denarius. Whose head and whose title does it bear?” They said, “The emperor’s.” ",
        "reference": "en-NRSV-25795",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "25",
        "text": "He said to them, “Then give to the emperor the things that are the emperor’s, and to God the things that are God’s.” ",
        "reference": "en-NRSV-25796",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "26",
        "text": "And they were not able in the presence of the people to trap him by what he said; and being amazed by his answer, they became silent.",
        "reference": "en-NRSV-25797",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "27",
        "text": "\nSome Sadducees, those who say there is no resurrection, came to him \n",
        "headerReference": "en-NRSV-25798",
        "title": "\nThe Question about the Resurrection\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "28",
        "text": "and asked him a question, “Teacher, Moses wrote for us that if a man’s brother dies, leaving a wife but no children, the man shall marry the widow and raise up children for his brother. ",
        "reference": "en-NRSV-25799",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "29",
        "text": "Now there were seven brothers; the first married, and died childless; ",
        "reference": "en-NRSV-25800",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "30",
        "text": "then the second ",
        "reference": "en-NRSV-25801",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "31",
        "text": "and the third married her, and so in the same way all seven died childless. ",
        "reference": "en-NRSV-25802",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "32",
        "text": "Finally the woman also died. ",
        "reference": "en-NRSV-25803",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "33",
        "text": "In the resurrection, therefore, whose wife will the woman be? For the seven had married her.”",
        "reference": "en-NRSV-25804",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "34",
        "text": "Jesus said to them, “Those who belong to this age marry and are given in marriage; ",
        "reference": "en-NRSV-25805",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "35",
        "text": "but those who are considered worthy of a place in that age and in the resurrection from the dead neither marry nor are given in marriage. ",
        "reference": "en-NRSV-25806",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "36",
        "text": "Indeed they cannot die anymore, because they are like angels and are children of God, being children of the resurrection. ",
        "reference": "en-NRSV-25807",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "37",
        "text": "And the fact that the dead are raised Moses himself showed, in the story about the bush, where he speaks of the Lord as the God of Abraham, the God of Isaac, and the God of Jacob. ",
        "reference": "en-NRSV-25808",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "38",
        "text": "Now he is God not of the dead, but of the living; for to him all of them are alive.” ",
        "reference": "en-NRSV-25809",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "39",
        "text": "Then some of the scribes answered, “Teacher, you have spoken well.” ",
        "reference": "en-NRSV-25810",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "40",
        "text": "For they no longer dared to ask him another question.",
        "reference": "en-NRSV-25811",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "41",
        "text": "\nThen he said to them, “How can they say that the Messiah is David’s son? \n",
        "headerReference": "en-NRSV-25812",
        "title": "\nThe Question about David’s Son\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "42",
        "text": "For David himself says in the book of Psalms, \n‘The Lord said to my Lord,\n \n“Sit at my right hand,\n",
        "reference": "en-NRSV-25813",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "43",
        "text": "\nuntil I make your enemies your footstool.”’",
        "reference": "en-NRSV-25814",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "44",
        "text": "David thus calls him Lord; so how can he be his son?”",
        "reference": "en-NRSV-25815",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "45",
        "text": "\nIn the hearing of all the people he said to the disciples, \n",
        "headerReference": "en-NRSV-25816",
        "title": "\nJesus Denounces the Scribes\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "46",
        "text": "“Beware of the scribes, who like to walk around in long robes, and love to be greeted with respect in the marketplaces, and to have the best seats in the synagogues and places of honor at banquets. ",
        "reference": "en-NRSV-25817",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "20",
        "verse": "47",
        "text": "They devour widows’ houses and for the sake of appearance say long prayers. They will receive the greater condemnation.”",
        "reference": "en-NRSV-25818",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "1",
        "text": "He looked up and saw rich people putting their gifts into the treasury; ",
        "headerReference": "en-NRSV-25819",
        "title": "\nThe Widow’s Offering\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "2",
        "text": "he also saw a poor widow put in two small copper coins. ",
        "reference": "en-NRSV-25820",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "3",
        "text": "He said, “Truly I tell you, this poor widow has put in more than all of them; ",
        "reference": "en-NRSV-25821",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "4",
        "text": "for all of them have contributed out of their abundance, but she out of her poverty has put in all she had to live on.”",
        "reference": "en-NRSV-25822",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "5",
        "text": "\nWhen some were speaking about the temple, how it was adorned with beautiful stones and gifts dedicated to God, he said, \n",
        "headerReference": "en-NRSV-25823",
        "title": "\nThe Destruction of the Temple Foretold\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "6",
        "text": "“As for these things that you see, the days will come when not one stone will be left upon another; all will be thrown down.”",
        "reference": "en-NRSV-25824",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "7",
        "text": "\nThey asked him, “Teacher, when will this be, and what will be the sign that this is about to take place?” \n",
        "headerReference": "en-NRSV-25825",
        "title": "\nSigns and Persecutions\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "8",
        "text": "And he said, “Beware that you are not led astray; for many will come in my name and say, ‘I am he!’ and, ‘The time is near!’ Do not go after them.",
        "reference": "en-NRSV-25826",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "9",
        "text": "“When you hear of wars and insurrections, do not be terrified; for these things must take place first, but the end will not follow immediately.” ",
        "reference": "en-NRSV-25827",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "10",
        "text": "Then he said to them, “Nation will rise against nation, and kingdom against kingdom; ",
        "reference": "en-NRSV-25828",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "11",
        "text": "there will be great earthquakes, and in various places famines and plagues; and there will be dreadful portents and great signs from heaven.",
        "reference": "en-NRSV-25829",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "12",
        "text": "“But before all this occurs, they will arrest you and persecute you; they will hand you over to synagogues and prisons, and you will be brought before kings and governors because of my name. ",
        "reference": "en-NRSV-25830",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "13",
        "text": "This will give you an opportunity to testify. ",
        "reference": "en-NRSV-25831",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "14",
        "text": "So make up your minds not to prepare your defense in advance; ",
        "reference": "en-NRSV-25832",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "15",
        "text": "for I will give you words and a wisdom that none of your opponents will be able to withstand or contradict. ",
        "reference": "en-NRSV-25833",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "16",
        "text": "You will be betrayed even by parents and brothers, by relatives and friends; and they will put some of you to death. ",
        "reference": "en-NRSV-25834",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "17",
        "text": "You will be hated by all because of my name. ",
        "reference": "en-NRSV-25835",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "18",
        "text": "But not a hair of your head will perish. ",
        "reference": "en-NRSV-25836",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "19",
        "text": "By your endurance you will gain your souls.",
        "reference": "en-NRSV-25837",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "20",
        "text": "\n“When you see Jerusalem surrounded by armies, then know that its desolation has come near. \n",
        "headerReference": "en-NRSV-25838",
        "title": "\nThe Destruction of Jerusalem Foretold\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "21",
        "text": "Then those in Judea must flee to the mountains, and those inside the city must leave it, and those out in the country must not enter it; ",
        "reference": "en-NRSV-25839",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "22",
        "text": "for these are days of vengeance, as a fulfillment of all that is written. ",
        "reference": "en-NRSV-25840",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "23",
        "text": "Woe to those who are pregnant and to those who are nursing infants in those days! For there will be great distress on the earth and wrath against this people; ",
        "reference": "en-NRSV-25841",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "24",
        "text": "they will fall by the edge of the sword and be taken away as captives among all nations; and Jerusalem will be trampled on by the Gentiles, until the times of the Gentiles are fulfilled.",
        "reference": "en-NRSV-25842",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "25",
        "text": "\n“There will be signs in the sun, the moon, and the stars, and on the earth distress among nations confused by the roaring of the sea and the waves. \n",
        "headerReference": "en-NRSV-25843",
        "title": "\nThe Coming of the Son of Man\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "26",
        "text": "People will faint from fear and foreboding of what is coming upon the world, for the powers of the heavens will be shaken. ",
        "reference": "en-NRSV-25844",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "27",
        "text": "Then they will see ‘the Son of Man coming in a cloud’ with power and great glory. ",
        "reference": "en-NRSV-25845",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "28",
        "text": "Now when these things begin to take place, stand up and raise your heads, because your redemption is drawing near.”",
        "reference": "en-NRSV-25846",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "29",
        "text": "\nThen he told them a parable: “Look at the fig tree and all the trees; \n",
        "headerReference": "en-NRSV-25847",
        "title": "\nThe Lesson of the Fig Tree\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "30",
        "text": "as soon as they sprout leaves you can see for yourselves and know that summer is already near. ",
        "reference": "en-NRSV-25848",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "31",
        "text": "So also, when you see these things taking place, you know that the kingdom of God is near. ",
        "reference": "en-NRSV-25849",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "32",
        "text": "Truly I tell you, this generation will not pass away until all things have taken place. ",
        "reference": "en-NRSV-25850",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "33",
        "text": "Heaven and earth will pass away, but my words will not pass away.",
        "reference": "en-NRSV-25851",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "34",
        "text": "\n“Be on guard so that your hearts are not weighed down with dissipation and drunkenness and the worries of this life, and that day does not catch you unexpectedly, \n",
        "headerReference": "en-NRSV-25852",
        "title": "\nExhortation to Watch\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "35",
        "text": "like a trap. For it will come upon all who live on the face of the whole earth. ",
        "reference": "en-NRSV-25853",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "36",
        "text": "Be alert at all times, praying that you may have the strength to escape all these things that will take place, and to stand before the Son of Man.”",
        "reference": "en-NRSV-25854",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "37",
        "text": "Every day he was teaching in the temple, and at night he would go out and spend the night on the Mount of Olives, as it was called. ",
        "reference": "en-NRSV-25855",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "21",
        "verse": "38",
        "text": "And all the people would get up early in the morning to listen to him in the temple.",
        "reference": "en-NRSV-25856",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "1",
        "text": "Now the festival of Unleavened Bread, which is called the Passover, was near. ",
        "headerReference": "en-NRSV-25857",
        "title": "\nThe Plot to Kill Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "2",
        "text": "The chief priests and the scribes were looking for a way to put Jesus to death, for they were afraid of the people.",
        "reference": "en-NRSV-25858",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "3",
        "text": "Then Satan entered into Judas called Iscariot, who was one of the twelve; ",
        "reference": "en-NRSV-25859",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "4",
        "text": "he went away and conferred with the chief priests and officers of the temple police about how he might betray him to them. ",
        "reference": "en-NRSV-25860",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "5",
        "text": "They were greatly pleased and agreed to give him money. ",
        "reference": "en-NRSV-25861",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "6",
        "text": "So he consented and began to look for an opportunity to betray him to them when no crowd was present.",
        "reference": "en-NRSV-25862",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "7",
        "text": "\nThen came the day of Unleavened Bread, on which the Passover lamb had to be sacrificed. \n",
        "headerReference": "en-NRSV-25863",
        "title": "\nThe Preparation of the Passover\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "8",
        "text": "So Jesus sent Peter and John, saying, “Go and prepare the Passover meal for us that we may eat it.” ",
        "reference": "en-NRSV-25864",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "9",
        "text": "They asked him, “Where do you want us to make preparations for it?” ",
        "reference": "en-NRSV-25865",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "10",
        "text": "“Listen,” he said to them, “when you have entered the city, a man carrying a jar of water will meet you; follow him into the house he enters ",
        "reference": "en-NRSV-25866",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "11",
        "text": "and say to the owner of the house, ‘The teacher asks you, “Where is the guest room, where I may eat the Passover with my disciples?”’ ",
        "reference": "en-NRSV-25867",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "12",
        "text": "He will show you a large room upstairs, already furnished. Make preparations for us there.” ",
        "reference": "en-NRSV-25868",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "13",
        "text": "So they went and found everything as he had told them; and they prepared the Passover meal.",
        "reference": "en-NRSV-25869",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "14",
        "text": "\nWhen the hour came, he took his place at the table, and the apostles with him. \n",
        "headerReference": "en-NRSV-25870",
        "title": "\nThe Institution of the Lord’s Supper\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "15",
        "text": "He said to them, “I have eagerly desired to eat this Passover with you before I suffer; ",
        "reference": "en-NRSV-25871",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "16",
        "text": "for I tell you, I will not eat it until it is fulfilled in the kingdom of God.” ",
        "reference": "en-NRSV-25872",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "17",
        "text": "Then he took a cup, and after giving thanks he said, “Take this and divide it among yourselves; ",
        "reference": "en-NRSV-25873",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "18",
        "text": "for I tell you that from now on I will not drink of the fruit of the vine until the kingdom of God comes.” ",
        "reference": "en-NRSV-25874",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "19",
        "text": "Then he took a loaf of bread, and when he had given thanks, he broke it and gave it to them, saying, “This is my body, which is given for you. Do this in remembrance of me.” ",
        "reference": "en-NRSV-25875",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "20",
        "text": "And he did the same with the cup after supper, saying, “This cup that is poured out for you is the new covenant in my blood. ",
        "reference": "en-NRSV-25876",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "21",
        "text": "But see, the one who betrays me is with me, and his hand is on the table. ",
        "reference": "en-NRSV-25877",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "22",
        "text": "For the Son of Man is going as it has been determined, but woe to that one by whom he is betrayed!” ",
        "reference": "en-NRSV-25878",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "23",
        "text": "Then they began to ask one another which one of them it could be who would do this.",
        "reference": "en-NRSV-25879",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "24",
        "text": "\nA dispute also arose among them as to which one of them was to be regarded as the greatest. \n",
        "headerReference": "en-NRSV-25880",
        "title": "\nThe Dispute about Greatness\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "25",
        "text": "But he said to them, “The kings of the Gentiles lord it over them; and those in authority over them are called benefactors. ",
        "reference": "en-NRSV-25881",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "26",
        "text": "But not so with you; rather the greatest among you must become like the youngest, and the leader like one who serves. ",
        "reference": "en-NRSV-25882",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "27",
        "text": "For who is greater, the one who is at the table or the one who serves? Is it not the one at the table? But I am among you as one who serves.",
        "reference": "en-NRSV-25883",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "28",
        "text": "“You are those who have stood by me in my trials; ",
        "reference": "en-NRSV-25884",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "29",
        "text": "and I confer on you, just as my Father has conferred on me, a kingdom, ",
        "reference": "en-NRSV-25885",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "30",
        "text": "so that you may eat and drink at my table in my kingdom, and you will sit on thrones judging the twelve tribes of Israel.",
        "reference": "en-NRSV-25886",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "31",
        "text": "\n“Simon, Simon, listen! Satan has demanded to sift all of you like wheat, \n",
        "headerReference": "en-NRSV-25887",
        "title": "\nJesus Predicts Peter’s Denial\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "32",
        "text": "but I have prayed for you that your own faith may not fail; and you, when once you have turned back, strengthen your brothers.” ",
        "reference": "en-NRSV-25888",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "33",
        "text": "And he said to him, “Lord, I am ready to go with you to prison and to death!” ",
        "reference": "en-NRSV-25889",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "34",
        "text": "Jesus said, “I tell you, Peter, the cock will not crow this day, until you have denied three times that you know me.”",
        "reference": "en-NRSV-25890",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "35",
        "text": "\nHe said to them, “When I sent you out without a purse, bag, or sandals, did you lack anything?” They said, “No, not a thing.” \n",
        "headerReference": "en-NRSV-25891",
        "title": "\nPurse, Bag, and Sword\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "36",
        "text": "He said to them, “But now, the one who has a purse must take it, and likewise a bag. And the one who has no sword must sell his cloak and buy one. ",
        "reference": "en-NRSV-25892",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "37",
        "text": "For I tell you, this scripture must be fulfilled in me, ‘And he was counted among the lawless’; and indeed what is written about me is being fulfilled.” ",
        "reference": "en-NRSV-25893",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "38",
        "text": "They said, “Lord, look, here are two swords.” He replied, “It is enough.”",
        "reference": "en-NRSV-25894",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "39",
        "text": "\nHe came out and went, as was his custom, to the Mount of Olives; and the disciples followed him. \n",
        "headerReference": "en-NRSV-25895",
        "title": "\nJesus Prays on the Mount of Olives\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "40",
        "text": "When he reached the place, he said to them, “Pray that you may not come into the time of trial.” ",
        "reference": "en-NRSV-25896",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "41",
        "text": "Then he withdrew from them about a stone’s throw, knelt down, and prayed, ",
        "reference": "en-NRSV-25897",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "42",
        "text": "“Father, if you are willing, remove this cup from me; yet, not my will but yours be done.” ",
        "reference": "en-NRSV-25898",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "43",
        "text": "[[Then an angel from heaven appeared to him and gave him strength. ",
        "reference": "en-NRSV-25899",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "44",
        "text": "In his anguish he prayed more earnestly, and his sweat became like great drops of blood falling down on the ground.]] ",
        "reference": "en-NRSV-25900",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "45",
        "text": "When he got up from prayer, he came to the disciples and found them sleeping because of grief, ",
        "reference": "en-NRSV-25901",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "46",
        "text": "and he said to them, “Why are you sleeping? Get up and pray that you may not come into the time of trial.”",
        "reference": "en-NRSV-25902",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "47",
        "text": "\nWhile he was still speaking, suddenly a crowd came, and the one called Judas, one of the twelve, was leading them. He approached Jesus to kiss him; \n",
        "headerReference": "en-NRSV-25903",
        "title": "\nThe Betrayal and Arrest of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "48",
        "text": "but Jesus said to him, “Judas, is it with a kiss that you are betraying the Son of Man?” ",
        "reference": "en-NRSV-25904",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "49",
        "text": "When those who were around him saw what was coming, they asked, “Lord, should we strike with the sword?” ",
        "reference": "en-NRSV-25905",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "50",
        "text": "Then one of them struck the slave of the high priest and cut off his right ear. ",
        "reference": "en-NRSV-25906",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "51",
        "text": "But Jesus said, “No more of this!” And he touched his ear and healed him. ",
        "reference": "en-NRSV-25907",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "52",
        "text": "Then Jesus said to the chief priests, the officers of the temple police, and the elders who had come for him, “Have you come out with swords and clubs as if I were a bandit? ",
        "reference": "en-NRSV-25908",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "53",
        "text": "When I was with you day after day in the temple, you did not lay hands on me. But this is your hour, and the power of darkness!”",
        "reference": "en-NRSV-25909",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "54",
        "text": "\nThen they seized him and led him away, bringing him into the high priest’s house. But Peter was following at a distance. \n",
        "headerReference": "en-NRSV-25910",
        "title": "\nPeter Denies Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "55",
        "text": "When they had kindled a fire in the middle of the courtyard and sat down together, Peter sat among them. ",
        "reference": "en-NRSV-25911",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "56",
        "text": "Then a servant-girl, seeing him in the firelight, stared at him and said, “This man also was with him.” ",
        "reference": "en-NRSV-25912",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "57",
        "text": "But he denied it, saying, “Woman, I do not know him.” ",
        "reference": "en-NRSV-25913",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "58",
        "text": "A little later someone else, on seeing him, said, “You also are one of them.” But Peter said, “Man, I am not!” ",
        "reference": "en-NRSV-25914",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "59",
        "text": "Then about an hour later still another kept insisting, “Surely this man also was with him; for he is a Galilean.” ",
        "reference": "en-NRSV-25915",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "60",
        "text": "But Peter said, “Man, I do not know what you are talking about!” At that moment, while he was still speaking, the cock crowed. ",
        "reference": "en-NRSV-25916",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "61",
        "text": "The Lord turned and looked at Peter. Then Peter remembered the word of the Lord, how he had said to him, “Before the cock crows today, you will deny me three times.” ",
        "reference": "en-NRSV-25917",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "62",
        "text": "And he went out and wept bitterly.",
        "reference": "en-NRSV-25918",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "63",
        "text": "\nNow the men who were holding Jesus began to mock him and beat him; \n",
        "headerReference": "en-NRSV-25919",
        "title": "\nThe Mocking and Beating of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "64",
        "text": "they also blindfolded him and kept asking him, “Prophesy! Who is it that struck you?” ",
        "reference": "en-NRSV-25920",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "65",
        "text": "They kept heaping many other insults on him.",
        "reference": "en-NRSV-25921",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "66",
        "text": "\nWhen day came, the assembly of the elders of the people, both chief priests and scribes, gathered together, and they brought him to their council. \n",
        "headerReference": "en-NRSV-25922",
        "title": "\nJesus before the Council\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "67",
        "text": "They said, “If you are the Messiah, tell us.” He replied, “If I tell you, you will not believe; ",
        "reference": "en-NRSV-25923",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "68",
        "text": "and if I question you, you will not answer. ",
        "reference": "en-NRSV-25924",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "69",
        "text": "But from now on the Son of Man will be seated at the right hand of the power of God.” ",
        "reference": "en-NRSV-25925",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "70",
        "text": "All of them asked, “Are you, then, the Son of God?” He said to them, “You say that I am.” ",
        "reference": "en-NRSV-25926",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "22",
        "verse": "71",
        "text": "Then they said, “What further testimony do we need? We have heard it ourselves from his own lips!”",
        "reference": "en-NRSV-25927",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "1",
        "text": "Then the assembly rose as a body and brought Jesus before Pilate. ",
        "headerReference": "en-NRSV-25928",
        "title": "\nJesus before Pilate\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "2",
        "text": "They began to accuse him, saying, “We found this man perverting our nation, forbidding us to pay taxes to the emperor, and saying that he himself is the Messiah, a king.” ",
        "reference": "en-NRSV-25929",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "3",
        "text": "Then Pilate asked him, “Are you the king of the Jews?” He answered, “You say so.” ",
        "reference": "en-NRSV-25930",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "4",
        "text": "Then Pilate said to the chief priests and the crowds, “I find no basis for an accusation against this man.” ",
        "reference": "en-NRSV-25931",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "5",
        "text": "But they were insistent and said, “He stirs up the people by teaching throughout all Judea, from Galilee where he began even to this place.”",
        "reference": "en-NRSV-25932",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "6",
        "text": "\nWhen Pilate heard this, he asked whether the man was a Galilean. \n",
        "headerReference": "en-NRSV-25933",
        "title": "\nJesus before Herod\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "7",
        "text": "And when he learned that he was under Herod’s jurisdiction, he sent him off to Herod, who was himself in Jerusalem at that time. ",
        "reference": "en-NRSV-25934",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "8",
        "text": "When Herod saw Jesus, he was very glad, for he had been wanting to see him for a long time, because he had heard about him and was hoping to see him perform some sign. ",
        "reference": "en-NRSV-25935",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "9",
        "text": "He questioned him at some length, but Jesus gave him no answer. ",
        "reference": "en-NRSV-25936",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "10",
        "text": "The chief priests and the scribes stood by, vehemently accusing him. ",
        "reference": "en-NRSV-25937",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "11",
        "text": "Even Herod with his soldiers treated him with contempt and mocked him; then he put an elegant robe on him, and sent him back to Pilate. ",
        "reference": "en-NRSV-25938",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "12",
        "text": "That same day Herod and Pilate became friends with each other; before this they had been enemies.",
        "reference": "en-NRSV-25939",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "13",
        "text": "\nPilate then called together the chief priests, the leaders, and the people, \n",
        "headerReference": "en-NRSV-25940",
        "title": "\nJesus Sentenced to Death\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "14",
        "text": "and said to them, “You brought me this man as one who was perverting the people; and here I have examined him in your presence and have not found this man guilty of any of your charges against him. ",
        "reference": "en-NRSV-25941",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "15",
        "text": "Neither has Herod, for he sent him back to us. Indeed, he has done nothing to deserve death. ",
        "reference": "en-NRSV-25942",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "16",
        "text": "I will therefore have him flogged and release him.”",
        "reference": "en-NRSV-25943",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "18",
        "text": "Then they all shouted out together, “Away with this fellow! Release Barabbas for us!” ",
        "reference": "en-NRSV-25944",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "19",
        "text": "(This was a man who had been put in prison for an insurrection that had taken place in the city, and for murder.) ",
        "reference": "en-NRSV-25945",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "20",
        "text": "Pilate, wanting to release Jesus, addressed them again; ",
        "reference": "en-NRSV-25946",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "21",
        "text": "but they kept shouting, “Crucify, crucify him!” ",
        "reference": "en-NRSV-25947",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "22",
        "text": "A third time he said to them, “Why, what evil has he done? I have found in him no ground for the sentence of death; I will therefore have him flogged and then release him.” ",
        "reference": "en-NRSV-25948",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "23",
        "text": "But they kept urgently demanding with loud shouts that he should be crucified; and their voices prevailed. ",
        "reference": "en-NRSV-25949",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "24",
        "text": "So Pilate gave his verdict that their demand should be granted. ",
        "reference": "en-NRSV-25950",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "25",
        "text": "He released the man they asked for, the one who had been put in prison for insurrection and murder, and he handed Jesus over as they wished.",
        "reference": "en-NRSV-25951",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "26",
        "text": "\nAs they led him away, they seized a man, Simon of Cyrene, who was coming from the country, and they laid the cross on him, and made him carry it behind Jesus. \n",
        "headerReference": "en-NRSV-25952",
        "title": "\nThe Crucifixion of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "27",
        "text": "A great number of the people followed him, and among them were women who were beating their breasts and wailing for him. ",
        "reference": "en-NRSV-25953",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "28",
        "text": "But Jesus turned to them and said, “Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children. ",
        "reference": "en-NRSV-25954",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "29",
        "text": "For the days are surely coming when they will say, ‘Blessed are the barren, and the wombs that never bore, and the breasts that never nursed.’ ",
        "reference": "en-NRSV-25955",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "30",
        "text": "Then they will begin to say to the mountains, ‘Fall on us’; and to the hills, ‘Cover us.’ ",
        "reference": "en-NRSV-25956",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "31",
        "text": "For if they do this when the wood is green, what will happen when it is dry?”",
        "reference": "en-NRSV-25957",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "32",
        "text": "Two others also, who were criminals, were led away to be put to death with him. ",
        "reference": "en-NRSV-25958",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "33",
        "text": "When they came to the place that is called The Skull, they crucified Jesus there with the criminals, one on his right and one on his left. ",
        "reference": "en-NRSV-25959",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "34",
        "text": "[[Then Jesus said, “Father, forgive them; for they do not know what they are doing.”]] And they cast lots to divide his clothing. ",
        "reference": "en-NRSV-25960",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "35",
        "text": "And the people stood by, watching; but the leaders scoffed at him, saying, “He saved others; let him save himself if he is the Messiah of God, his chosen one!” ",
        "reference": "en-NRSV-25961",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "36",
        "text": "The soldiers also mocked him, coming up and offering him sour wine, ",
        "reference": "en-NRSV-25962",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "37",
        "text": "and saying, “If you are the King of the Jews, save yourself!” ",
        "reference": "en-NRSV-25963",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "38",
        "text": "There was also an inscription over him, “This is the King of the Jews.”",
        "reference": "en-NRSV-25964",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "39",
        "text": "One of the criminals who were hanged there kept deriding him and saying, “Are you not the Messiah? Save yourself and us!” ",
        "reference": "en-NRSV-25965",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "40",
        "text": "But the other rebuked him, saying, “Do you not fear God, since you are under the same sentence of condemnation? ",
        "reference": "en-NRSV-25966",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "41",
        "text": "And we indeed have been condemned justly, for we are getting what we deserve for our deeds, but this man has done nothing wrong.” ",
        "reference": "en-NRSV-25967",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "42",
        "text": "Then he said, “Jesus, remember me when you come into your kingdom.” ",
        "reference": "en-NRSV-25968",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "43",
        "text": "He replied, “Truly I tell you, today you will be with me in Paradise.”",
        "reference": "en-NRSV-25969",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "44",
        "text": "\nIt was now about noon, and darkness came over the whole land until three in the afternoon, \n",
        "headerReference": "en-NRSV-25970",
        "title": "\nThe Death of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "45",
        "text": "while the sun’s light failed; and the curtain of the temple was torn in two. ",
        "reference": "en-NRSV-25971",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "46",
        "text": "Then Jesus, crying with a loud voice, said, “Father, into your hands I commend my spirit.” Having said this, he breathed his last. ",
        "reference": "en-NRSV-25972",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "47",
        "text": "When the centurion saw what had taken place, he praised God and said, “Certainly this man was innocent.” ",
        "reference": "en-NRSV-25973",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "48",
        "text": "And when all the crowds who had gathered there for this spectacle saw what had taken place, they returned home, beating their breasts. ",
        "reference": "en-NRSV-25974",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "49",
        "text": "But all his acquaintances, including the women who had followed him from Galilee, stood at a distance, watching these things.",
        "reference": "en-NRSV-25975",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "50",
        "text": "\nNow there was a good and righteous man named Joseph, who, though a member of the council, \n",
        "headerReference": "en-NRSV-25976",
        "title": "\nThe Burial of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "51",
        "text": "had not agreed to their plan and action. He came from the Jewish town of Arimathea, and he was waiting expectantly for the kingdom of God. ",
        "reference": "en-NRSV-25977",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "52",
        "text": "This man went to Pilate and asked for the body of Jesus. ",
        "reference": "en-NRSV-25978",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "53",
        "text": "Then he took it down, wrapped it in a linen cloth, and laid it in a rock-hewn tomb where no one had ever been laid. ",
        "reference": "en-NRSV-25979",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "54",
        "text": "It was the day of Preparation, and the sabbath was beginning. ",
        "reference": "en-NRSV-25980",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "55",
        "text": "The women who had come with him from Galilee followed, and they saw the tomb and how his body was laid. ",
        "reference": "en-NRSV-25981",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "23",
        "verse": "56",
        "text": "Then they returned, and prepared spices and ointments. \nOn the sabbath they rested according to the commandment.\n",
        "reference": "en-NRSV-25982",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "1",
        "text": "But on the first day of the week, at early dawn, they came to the tomb, taking the spices that they had prepared. ",
        "headerReference": "en-NRSV-25983",
        "title": "\nThe Resurrection of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "2",
        "text": "They found the stone rolled away from the tomb, ",
        "reference": "en-NRSV-25984",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "3",
        "text": "but when they went in, they did not find the body. ",
        "reference": "en-NRSV-25985",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "4",
        "text": "While they were perplexed about this, suddenly two men in dazzling clothes stood beside them. ",
        "reference": "en-NRSV-25986",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "5",
        "text": "The women were terrified and bowed their faces to the ground, but the men said to them, “Why do you look for the living among the dead? He is not here, but has risen. ",
        "reference": "en-NRSV-25987",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "6",
        "text": "Remember how he told you, while he was still in Galilee, ",
        "reference": "en-NRSV-25988",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "7",
        "text": "that the Son of Man must be handed over to sinners, and be crucified, and on the third day rise again.” ",
        "reference": "en-NRSV-25989",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "8",
        "text": "Then they remembered his words, ",
        "reference": "en-NRSV-25990",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "9",
        "text": "and returning from the tomb, they told all this to the eleven and to all the rest. ",
        "reference": "en-NRSV-25991",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "10",
        "text": "Now it was Mary Magdalene, Joanna, Mary the mother of James, and the other women with them who told this to the apostles. ",
        "reference": "en-NRSV-25992",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "11",
        "text": "But these words seemed to them an idle tale, and they did not believe them. ",
        "reference": "en-NRSV-25993",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "12",
        "text": "But Peter got up and ran to the tomb; stooping and looking in, he saw the linen cloths by themselves; then he went home, amazed at what had happened.",
        "reference": "en-NRSV-25994",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "13",
        "text": "\nNow on that same day two of them were going to a village called Emmaus, about seven miles from Jerusalem, \n",
        "headerReference": "en-NRSV-25995",
        "title": "\nThe Walk to Emmaus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "14",
        "text": "and talking with each other about all these things that had happened. ",
        "reference": "en-NRSV-25996",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "15",
        "text": "While they were talking and discussing, Jesus himself came near and went with them, ",
        "reference": "en-NRSV-25997",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "16",
        "text": "but their eyes were kept from recognizing him. ",
        "reference": "en-NRSV-25998",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "17",
        "text": "And he said to them, “What are you discussing with each other while you walk along?” They stood still, looking sad. ",
        "reference": "en-NRSV-25999",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "18",
        "text": "Then one of them, whose name was Cleopas, answered him, “Are you the only stranger in Jerusalem who does not know the things that have taken place there in these days?” ",
        "reference": "en-NRSV-26000",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "19",
        "text": "He asked them, “What things?” They replied, “The things about Jesus of Nazareth, who was a prophet mighty in deed and word before God and all the people, ",
        "reference": "en-NRSV-26001",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "20",
        "text": "and how our chief priests and leaders handed him over to be condemned to death and crucified him. ",
        "reference": "en-NRSV-26002",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "21",
        "text": "But we had hoped that he was the one to redeem Israel. Yes, and besides all this, it is now the third day since these things took place. ",
        "reference": "en-NRSV-26003",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "22",
        "text": "Moreover, some women of our group astounded us. They were at the tomb early this morning, ",
        "reference": "en-NRSV-26004",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "23",
        "text": "and when they did not find his body there, they came back and told us that they had indeed seen a vision of angels who said that he was alive. ",
        "reference": "en-NRSV-26005",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "24",
        "text": "Some of those who were with us went to the tomb and found it just as the women had said; but they did not see him.” ",
        "reference": "en-NRSV-26006",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "25",
        "text": "Then he said to them, “Oh, how foolish you are, and how slow of heart to believe all that the prophets have declared! ",
        "reference": "en-NRSV-26007",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "26",
        "text": "Was it not necessary that the Messiah should suffer these things and then enter into his glory?” ",
        "reference": "en-NRSV-26008",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "27",
        "text": "Then beginning with Moses and all the prophets, he interpreted to them the things about himself in all the scriptures.",
        "reference": "en-NRSV-26009",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "28",
        "text": "As they came near the village to which they were going, he walked ahead as if he were going on. ",
        "reference": "en-NRSV-26010",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "29",
        "text": "But they urged him strongly, saying, “Stay with us, because it is almost evening and the day is now nearly over.” So he went in to stay with them. ",
        "reference": "en-NRSV-26011",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "30",
        "text": "When he was at the table with them, he took bread, blessed and broke it, and gave it to them. ",
        "reference": "en-NRSV-26012",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "31",
        "text": "Then their eyes were opened, and they recognized him; and he vanished from their sight. ",
        "reference": "en-NRSV-26013",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "32",
        "text": "They said to each other, “Were not our hearts burning within us while he was talking to us on the road, while he was opening the scriptures to us?” ",
        "reference": "en-NRSV-26014",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "33",
        "text": "That same hour they got up and returned to Jerusalem; and they found the eleven and their companions gathered together. ",
        "reference": "en-NRSV-26015",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "34",
        "text": "They were saying, “The Lord has risen indeed, and he has appeared to Simon!” ",
        "reference": "en-NRSV-26016",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "35",
        "text": "Then they told what had happened on the road, and how he had been made known to them in the breaking of the bread.",
        "reference": "en-NRSV-26017",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "36",
        "text": "\nWhile they were talking about this, Jesus himself stood among them and said to them, “Peace be with you.” \n",
        "headerReference": "en-NRSV-26018",
        "title": "\nJesus Appears to His Disciples\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "37",
        "text": "They were startled and terrified, and thought that they were seeing a ghost. ",
        "reference": "en-NRSV-26019",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "38",
        "text": "He said to them, “Why are you frightened, and why do doubts arise in your hearts? ",
        "reference": "en-NRSV-26020",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "39",
        "text": "Look at my hands and my feet; see that it is I myself. Touch me and see; for a ghost does not have flesh and bones as you see that I have.” ",
        "reference": "en-NRSV-26021",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "40",
        "text": "And when he had said this, he showed them his hands and his feet. ",
        "reference": "en-NRSV-26022",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "41",
        "text": "While in their joy they were disbelieving and still wondering, he said to them, “Have you anything here to eat?” ",
        "reference": "en-NRSV-26023",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "42",
        "text": "They gave him a piece of broiled fish, ",
        "reference": "en-NRSV-26024",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "43",
        "text": "and he took it and ate in their presence.",
        "reference": "en-NRSV-26025",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "44",
        "text": "Then he said to them, “These are my words that I spoke to you while I was still with you—that everything written about me in the law of Moses, the prophets, and the psalms must be fulfilled.” ",
        "reference": "en-NRSV-26026",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "45",
        "text": "Then he opened their minds to understand the scriptures, ",
        "reference": "en-NRSV-26027",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "46",
        "text": "and he said to them, “Thus it is written, that the Messiah is to suffer and to rise from the dead on the third day, ",
        "reference": "en-NRSV-26028",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "47",
        "text": "and that repentance and forgiveness of sins is to be proclaimed in his name to all nations, beginning from Jerusalem. ",
        "reference": "en-NRSV-26029",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "48",
        "text": "You are witnesses of these things. ",
        "reference": "en-NRSV-26030",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "49",
        "text": "And see, I am sending upon you what my Father promised; so stay here in the city until you have been clothed with power from on high.”",
        "reference": "en-NRSV-26031",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "50",
        "text": "\nThen he led them out as far as Bethany, and, lifting up his hands, he blessed them. \n",
        "headerReference": "en-NRSV-26032",
        "title": "\nThe Ascension of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "51",
        "text": "While he was blessing them, he withdrew from them and was carried up into heaven. ",
        "reference": "en-NRSV-26033",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "52",
        "text": "And they worshiped him, and returned to Jerusalem with great joy; ",
        "reference": "en-NRSV-26034",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Luke",
        "chapter": "24",
        "verse": "53",
        "text": "and they were continually in the temple blessing God.",
        "reference": "en-NRSV-26035",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "1",
        "text": "In the first book, Theophilus, I wrote about all that Jesus did and taught from the beginning ",
        "headerReference": "en-NRSV-26914",
        "title": "\nThe Promise of the Holy Spirit\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "2",
        "text": "until the day when he was taken up to heaven, after giving instructions through the Holy Spirit to the apostles whom he had chosen. ",
        "reference": "en-NRSV-26915",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "3",
        "text": "After his suffering he presented himself alive to them by many convincing proofs, appearing to them during forty days and speaking about the kingdom of God. ",
        "reference": "en-NRSV-26916",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "4",
        "text": "While staying with them, he ordered them not to leave Jerusalem, but to wait there for the promise of the Father. “This,” he said, “is what you have heard from me; ",
        "reference": "en-NRSV-26917",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "5",
        "text": "for John baptized with water, but you will be baptized with the Holy Spirit not many days from now.”",
        "reference": "en-NRSV-26918",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "6",
        "text": "\nSo when they had come together, they asked him, “Lord, is this the time when you will restore the kingdom to Israel?” \n",
        "headerReference": "en-NRSV-26919",
        "title": "\nThe Ascension of Jesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "7",
        "text": "He replied, “It is not for you to know the times or periods that the Father has set by his own authority. ",
        "reference": "en-NRSV-26920",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "8",
        "text": "But you will receive power when the Holy Spirit has come upon you; and you will be my witnesses in Jerusalem, in all Judea and Samaria, and to the ends of the earth.” ",
        "reference": "en-NRSV-26921",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "9",
        "text": "When he had said this, as they were watching, he was lifted up, and a cloud took him out of their sight. ",
        "reference": "en-NRSV-26922",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "10",
        "text": "While he was going and they were gazing up toward heaven, suddenly two men in white robes stood by them. ",
        "reference": "en-NRSV-26923",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "11",
        "text": "They said, “Men of Galilee, why do you stand looking up toward heaven? This Jesus, who has been taken up from you into heaven, will come in the same way as you saw him go into heaven.”",
        "reference": "en-NRSV-26924",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "12",
        "text": "\nThen they returned to Jerusalem from the mount called Olivet, which is near Jerusalem, a sabbath day’s journey away. \n",
        "headerReference": "en-NRSV-26925",
        "title": "\nMatthias Chosen to Replace Judas\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "13",
        "text": "When they had entered the city, they went to the room upstairs where they were staying, Peter, and John, and James, and Andrew, Philip and Thomas, Bartholomew and Matthew, James son of Alphaeus, and Simon the Zealot, and Judas son of James. ",
        "reference": "en-NRSV-26926",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "14",
        "text": "All these were constantly devoting themselves to prayer, together with certain women, including Mary the mother of Jesus, as well as his brothers.",
        "reference": "en-NRSV-26927",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "15",
        "text": "In those days Peter stood up among the believers (together the crowd numbered about one hundred twenty persons) and said, ",
        "reference": "en-NRSV-26928",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "16",
        "text": "“Friends, the scripture had to be fulfilled, which the Holy Spirit through David foretold concerning Judas, who became a guide for those who arrested Jesus— ",
        "reference": "en-NRSV-26929",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "17",
        "text": "for he was numbered among us and was allotted his share in this ministry.” ",
        "reference": "en-NRSV-26930",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "18",
        "text": "(Now this man acquired a field with the reward of his wickedness; and falling headlong, he burst open in the middle and all his bowels gushed out. ",
        "reference": "en-NRSV-26931",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "19",
        "text": "This became known to all the residents of Jerusalem, so that the field was called in their language Hakeldama, that is, Field of Blood.) ",
        "reference": "en-NRSV-26932",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "20",
        "text": "“For it is written in the book of Psalms, \n‘Let his homestead become desolate,    \n \nand let there be no one to live in it’;\n \nand\n \n‘Let another take his position of overseer.’\n",
        "reference": "en-NRSV-26933",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "21",
        "text": "So one of the men who have accompanied us during all the time that the Lord Jesus went in and out among us, ",
        "reference": "en-NRSV-26934",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "22",
        "text": "beginning from the baptism of John until the day when he was taken up from us—one of these must become a witness with us to his resurrection.” ",
        "reference": "en-NRSV-26935",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "23",
        "text": "So they proposed two, Joseph called Barsabbas, who was also known as Justus, and Matthias. ",
        "reference": "en-NRSV-26936",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "24",
        "text": "Then they prayed and said, “Lord, you know everyone’s heart. Show us which one of these two you have chosen ",
        "reference": "en-NRSV-26937",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "25",
        "text": "to take the place in this ministry and apostleship from which Judas turned aside to go to his own place.” ",
        "reference": "en-NRSV-26938",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "1",
        "verse": "26",
        "text": "And they cast lots for them, and the lot fell on Matthias; and he was added to the eleven apostles.",
        "reference": "en-NRSV-26939",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "1",
        "text": "When the day of Pentecost had come, they were all together in one place. ",
        "headerReference": "en-NRSV-26940",
        "title": "\nThe Coming of the Holy Spirit\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "2",
        "text": "And suddenly from heaven there came a sound like the rush of a violent wind, and it filled the entire house where they were sitting. ",
        "reference": "en-NRSV-26941",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "3",
        "text": "Divided tongues, as of fire, appeared among them, and a tongue rested on each of them. ",
        "reference": "en-NRSV-26942",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "4",
        "text": "All of them were filled with the Holy Spirit and began to speak in other languages, as the Spirit gave them ability.",
        "reference": "en-NRSV-26943",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "5",
        "text": "Now there were devout Jews from every nation under heaven living in Jerusalem. ",
        "reference": "en-NRSV-26944",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "6",
        "text": "And at this sound the crowd gathered and was bewildered, because each one heard them speaking in the native language of each. ",
        "reference": "en-NRSV-26945",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "7",
        "text": "Amazed and astonished, they asked, “Are not all these who are speaking Galileans? ",
        "reference": "en-NRSV-26946",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "8",
        "text": "And how is it that we hear, each of us, in our own native language? ",
        "reference": "en-NRSV-26947",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "9",
        "text": "Parthians, Medes, Elamites, and residents of Mesopotamia, Judea and Cappadocia, Pontus and Asia, ",
        "reference": "en-NRSV-26948",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "10",
        "text": "Phrygia and Pamphylia, Egypt and the parts of Libya belonging to Cyrene, and visitors from Rome, both Jews and proselytes, ",
        "reference": "en-NRSV-26949",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "11",
        "text": "Cretans and Arabs—in our own languages we hear them speaking about God’s deeds of power.” ",
        "reference": "en-NRSV-26950",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "12",
        "text": "All were amazed and perplexed, saying to one another, “What does this mean?” ",
        "reference": "en-NRSV-26951",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "13",
        "text": "But others sneered and said, “They are filled with new wine.”",
        "reference": "en-NRSV-26952",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "14",
        "text": "\nBut Peter, standing with the eleven, raised his voice and addressed them, “Men of Judea and all who live in Jerusalem, let this be known to you, and listen to what I say. \n",
        "headerReference": "en-NRSV-26953",
        "title": "\nPeter Addresses the Crowd\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "15",
        "text": "Indeed, these are not drunk, as you suppose, for it is only nine o’clock in the morning. ",
        "reference": "en-NRSV-26954",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "16",
        "text": "No, this is what was spoken through the prophet Joel:",
        "reference": "en-NRSV-26955",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "17",
        "text": "‘In the last days it will be, God declares, \nthat I will pour out my Spirit upon all flesh,    \n \nand your sons and your daughters shall prophesy,\n \nand your young men shall see visions,    \n \nand your old men shall dream dreams.\n",
        "reference": "en-NRSV-26956",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "18",
        "text": "Even upon my slaves, both men and women,     \nin those days I will pour out my Spirit;\n \nand they shall prophesy.\n",
        "reference": "en-NRSV-26957",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "19",
        "text": "And I will show portents in the heaven above     \nand signs on the earth below,\n \nblood, and fire, and smoky mist.\n",
        "reference": "en-NRSV-26958",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "20",
        "text": "The sun shall be turned to darkness     \nand the moon to blood,\n \nbefore the coming of the Lord’s great and glorious day.\n",
        "reference": "en-NRSV-26959",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "21",
        "text": "Then everyone who calls on the name of the Lord shall be saved.’",
        "reference": "en-NRSV-26960",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "22",
        "text": "“You that are Israelites, listen to what I have to say: Jesus of Nazareth, a man attested to you by God with deeds of power, wonders, and signs that God did through him among you, as you yourselves know— ",
        "reference": "en-NRSV-26961",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "23",
        "text": "this man, handed over to you according to the definite plan and foreknowledge of God, you crucified and killed by the hands of those outside the law. ",
        "reference": "en-NRSV-26962",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "24",
        "text": "But God raised him up, having freed him from death, because it was impossible for him to be held in its power. ",
        "reference": "en-NRSV-26963",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "25",
        "text": "For David says concerning him, \n‘I saw the Lord always before me,    \n \nfor he is at my right hand so that I will not be shaken;\n",
        "reference": "en-NRSV-26964",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "26",
        "text": "therefore my heart was glad, and my tongue rejoiced;     \nmoreover my flesh will live in hope.\n",
        "reference": "en-NRSV-26965",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "27",
        "text": "For you will not abandon my soul to Hades,     \nor let your Holy One experience corruption.\n",
        "reference": "en-NRSV-26966",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "28",
        "text": "You have made known to me the ways of life;     \nyou will make me full of gladness with your presence.’\n",
        "reference": "en-NRSV-26967",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "29",
        "text": "“Fellow Israelites, I may say to you confidently of our ancestor David that he both died and was buried, and his tomb is with us to this day. ",
        "reference": "en-NRSV-26968",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "30",
        "text": "Since he was a prophet, he knew that God had sworn with an oath to him that he would put one of his descendants on his throne. ",
        "reference": "en-NRSV-26969",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "31",
        "text": "Foreseeing this, David spoke of the resurrection of the Messiah, saying, \n‘He was not abandoned to Hades,    \n \nnor did his flesh experience corruption.’\n",
        "reference": "en-NRSV-26970",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "32",
        "text": "This Jesus God raised up, and of that all of us are witnesses. ",
        "reference": "en-NRSV-26971",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "33",
        "text": "Being therefore exalted at the right hand of God, and having received from the Father the promise of the Holy Spirit, he has poured out this that you both see and hear. ",
        "reference": "en-NRSV-26972",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "34",
        "text": "For David did not ascend into the heavens, but he himself says, \n‘The Lord said to my Lord,\n \n“Sit at my right hand,\n",
        "reference": "en-NRSV-26973",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "35",
        "text": "\nuntil I make your enemies your footstool.”’",
        "reference": "en-NRSV-26974",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "36",
        "text": "Therefore let the entire house of Israel know with certainty that God has made him both Lord and Messiah, this Jesus whom you crucified.”",
        "reference": "en-NRSV-26975",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "37",
        "text": "\nNow when they heard this, they were cut to the heart and said to Peter and to the other apostles, “Brothers, what should we do?” \n",
        "headerReference": "en-NRSV-26976",
        "title": "\nThe First Converts\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "38",
        "text": "Peter said to them, “Repent, and be baptized every one of you in the name of Jesus Christ so that your sins may be forgiven; and you will receive the gift of the Holy Spirit. ",
        "reference": "en-NRSV-26977",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "39",
        "text": "For the promise is for you, for your children, and for all who are far away, everyone whom the Lord our God calls to him.” ",
        "reference": "en-NRSV-26978",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "40",
        "text": "And he testified with many other arguments and exhorted them, saying, “Save yourselves from this corrupt generation.” ",
        "reference": "en-NRSV-26979",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "41",
        "text": "So those who welcomed his message were baptized, and that day about three thousand persons were added. ",
        "reference": "en-NRSV-26980",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "42",
        "text": "They devoted themselves to the apostles’ teaching and fellowship, to the breaking of bread and the prayers.",
        "reference": "en-NRSV-26981",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "43",
        "text": "\nAwe came upon everyone, because many wonders and signs were being done by the apostles. \n",
        "headerReference": "en-NRSV-26982",
        "title": "\nLife among the Believers\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "44",
        "text": "All who believed were together and had all things in common; ",
        "reference": "en-NRSV-26983",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "45",
        "text": "they would sell their possessions and goods and distribute the proceeds to all, as any had need. ",
        "reference": "en-NRSV-26984",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "46",
        "text": "Day by day, as they spent much time together in the temple, they broke bread at home and ate their food with glad and generous hearts, ",
        "reference": "en-NRSV-26985",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "2",
        "verse": "47",
        "text": "praising God and having the goodwill of all the people. And day by day the Lord added to their number those who were being saved.",
        "reference": "en-NRSV-26986",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "1",
        "text": "One day Peter and John were going up to the temple at the hour of prayer, at three o’clock in the afternoon. ",
        "headerReference": "en-NRSV-26987",
        "title": "\nPeter Heals a Crippled Beggar\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "2",
        "text": "And a man lame from birth was being carried in. People would lay him daily at the gate of the temple called the Beautiful Gate so that he could ask for alms from those entering the temple. ",
        "reference": "en-NRSV-26988",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "3",
        "text": "When he saw Peter and John about to go into the temple, he asked them for alms. ",
        "reference": "en-NRSV-26989",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "4",
        "text": "Peter looked intently at him, as did John, and said, “Look at us.” ",
        "reference": "en-NRSV-26990",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "5",
        "text": "And he fixed his attention on them, expecting to receive something from them. ",
        "reference": "en-NRSV-26991",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "6",
        "text": "But Peter said, “I have no silver or gold, but what I have I give you; in the name of Jesus Christ of Nazareth, stand up and walk.” ",
        "reference": "en-NRSV-26992",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "7",
        "text": "And he took him by the right hand and raised him up; and immediately his feet and ankles were made strong. ",
        "reference": "en-NRSV-26993",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "8",
        "text": "Jumping up, he stood and began to walk, and he entered the temple with them, walking and leaping and praising God. ",
        "reference": "en-NRSV-26994",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "9",
        "text": "All the people saw him walking and praising God, ",
        "reference": "en-NRSV-26995",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "10",
        "text": "and they recognized him as the one who used to sit and ask for alms at the Beautiful Gate of the temple; and they were filled with wonder and amazement at what had happened to him.",
        "reference": "en-NRSV-26996",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "11",
        "text": "\nWhile he clung to Peter and John, all the people ran together to them in the portico called Solomon’s Portico, utterly astonished. \n",
        "headerReference": "en-NRSV-26997",
        "title": "\nPeter Speaks in Solomon’s Portico\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "12",
        "text": "When Peter saw it, he addressed the people, “You Israelites, why do you wonder at this, or why do you stare at us, as though by our own power or piety we had made him walk? ",
        "reference": "en-NRSV-26998",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "13",
        "text": "The God of Abraham, the God of Isaac, and the God of Jacob, the God of our ancestors has glorified his servant Jesus, whom you handed over and rejected in the presence of Pilate, though he had decided to release him. ",
        "reference": "en-NRSV-26999",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "14",
        "text": "But you rejected the Holy and Righteous One and asked to have a murderer given to you, ",
        "reference": "en-NRSV-27000",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "15",
        "text": "and you killed the Author of life, whom God raised from the dead. To this we are witnesses. ",
        "reference": "en-NRSV-27001",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "16",
        "text": "And by faith in his name, his name itself has made this man strong, whom you see and know; and the faith that is through Jesus has given him this perfect health in the presence of all of you.",
        "reference": "en-NRSV-27002",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "17",
        "text": "“And now, friends, I know that you acted in ignorance, as did also your rulers. ",
        "reference": "en-NRSV-27003",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "18",
        "text": "In this way God fulfilled what he had foretold through all the prophets, that his Messiah would suffer. ",
        "reference": "en-NRSV-27004",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "19",
        "text": "Repent therefore, and turn to God so that your sins may be wiped out, ",
        "reference": "en-NRSV-27005",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "20",
        "text": "so that times of refreshing may come from the presence of the Lord, and that he may send the Messiah appointed for you, that is, Jesus, ",
        "reference": "en-NRSV-27006",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "21",
        "text": "who must remain in heaven until the time of universal restoration that God announced long ago through his holy prophets. ",
        "reference": "en-NRSV-27007",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "22",
        "text": "Moses said, ‘The Lord your God will raise up for you from your own people a prophet like me. You must listen to whatever he tells you. ",
        "reference": "en-NRSV-27008",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "23",
        "text": "And it will be that everyone who does not listen to that prophet will be utterly rooted out of the people.’ ",
        "reference": "en-NRSV-27009",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "24",
        "text": "And all the prophets, as many as have spoken, from Samuel and those after him, also predicted these days. ",
        "reference": "en-NRSV-27010",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "25",
        "text": "You are the descendants of the prophets and of the covenant that God gave to your ancestors, saying to Abraham, ‘And in your descendants all the families of the earth shall be blessed.’ ",
        "reference": "en-NRSV-27011",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "3",
        "verse": "26",
        "text": "When God raised up his servant, he sent him first to you, to bless you by turning each of you from your wicked ways.”",
        "reference": "en-NRSV-27012",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "1",
        "text": "While Peter and John were speaking to the people, the priests, the captain of the temple, and the Sadducees came to them, ",
        "headerReference": "en-NRSV-27013",
        "title": "\nPeter and John before the Council\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "2",
        "text": "much annoyed because they were teaching the people and proclaiming that in Jesus there is the resurrection of the dead. ",
        "reference": "en-NRSV-27014",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "3",
        "text": "So they arrested them and put them in custody until the next day, for it was already evening. ",
        "reference": "en-NRSV-27015",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "4",
        "text": "But many of those who heard the word believed; and they numbered about five thousand.",
        "reference": "en-NRSV-27016",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "5",
        "text": "The next day their rulers, elders, and scribes assembled in Jerusalem, ",
        "reference": "en-NRSV-27017",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "6",
        "text": "with Annas the high priest, Caiaphas, John, and Alexander, and all who were of the high-priestly family. ",
        "reference": "en-NRSV-27018",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "7",
        "text": "When they had made the prisoners stand in their midst, they inquired, “By what power or by what name did you do this?” ",
        "reference": "en-NRSV-27019",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "8",
        "text": "Then Peter, filled with the Holy Spirit, said to them, “Rulers of the people and elders, ",
        "reference": "en-NRSV-27020",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "9",
        "text": "if we are questioned today because of a good deed done to someone who was sick and are asked how this man has been healed, ",
        "reference": "en-NRSV-27021",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "10",
        "text": "let it be known to all of you, and to all the people of Israel, that this man is standing before you in good health by the name of Jesus Christ of Nazareth, whom you crucified, whom God raised from the dead. ",
        "reference": "en-NRSV-27022",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "11",
        "text": "This Jesus is \n‘the stone that was rejected by you, the builders;    \n \nit has become the cornerstone.’\n",
        "reference": "en-NRSV-27023",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "12",
        "text": "There is salvation in no one else, for there is no other name under heaven given among mortals by which we must be saved.”",
        "reference": "en-NRSV-27024",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "13",
        "text": "Now when they saw the boldness of Peter and John and realized that they were uneducated and ordinary men, they were amazed and recognized them as companions of Jesus. ",
        "reference": "en-NRSV-27025",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "14",
        "text": "When they saw the man who had been cured standing beside them, they had nothing to say in opposition. ",
        "reference": "en-NRSV-27026",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "15",
        "text": "So they ordered them to leave the council while they discussed the matter with one another. ",
        "reference": "en-NRSV-27027",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "16",
        "text": "They said, “What will we do with them? For it is obvious to all who live in Jerusalem that a notable sign has been done through them; we cannot deny it. ",
        "reference": "en-NRSV-27028",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "17",
        "text": "But to keep it from spreading further among the people, let us warn them to speak no more to anyone in this name.” ",
        "reference": "en-NRSV-27029",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "18",
        "text": "So they called them and ordered them not to speak or teach at all in the name of Jesus. ",
        "reference": "en-NRSV-27030",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "19",
        "text": "But Peter and John answered them, “Whether it is right in God’s sight to listen to you rather than to God, you must judge; ",
        "reference": "en-NRSV-27031",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "20",
        "text": "for we cannot keep from speaking about what we have seen and heard.” ",
        "reference": "en-NRSV-27032",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "21",
        "text": "After threatening them again, they let them go, finding no way to punish them because of the people, for all of them praised God for what had happened. ",
        "reference": "en-NRSV-27033",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "22",
        "text": "For the man on whom this sign of healing had been performed was more than forty years old.",
        "reference": "en-NRSV-27034",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "23",
        "text": "\nAfter they were released, they went to their friends and reported what the chief priests and the elders had said to them. \n",
        "headerReference": "en-NRSV-27035",
        "title": "\nThe Believers Pray for Boldness\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "24",
        "text": "When they heard it, they raised their voices together to God and said, “Sovereign Lord, who made the heaven and the earth, the sea, and everything in them, ",
        "reference": "en-NRSV-27036",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "25",
        "text": "it is you who said by the Holy Spirit through our ancestor David, your servant: \n‘Why did the Gentiles rage,    \n \nand the peoples imagine vain things?\n",
        "reference": "en-NRSV-27037",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "26",
        "text": "The kings of the earth took their stand,     \nand the rulers have gathered together\n \nagainst the Lord and against his Messiah.’\n",
        "reference": "en-NRSV-27038",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "27",
        "text": "For in this city, in fact, both Herod and Pontius Pilate, with the Gentiles and the peoples of Israel, gathered together against your holy servant Jesus, whom you anointed, ",
        "reference": "en-NRSV-27039",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "28",
        "text": "to do whatever your hand and your plan had predestined to take place. ",
        "reference": "en-NRSV-27040",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "29",
        "text": "And now, Lord, look at their threats, and grant to your servants to speak your word with all boldness, ",
        "reference": "en-NRSV-27041",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "30",
        "text": "while you stretch out your hand to heal, and signs and wonders are performed through the name of your holy servant Jesus.” ",
        "reference": "en-NRSV-27042",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "31",
        "text": "When they had prayed, the place in which they were gathered together was shaken; and they were all filled with the Holy Spirit and spoke the word of God with boldness.",
        "reference": "en-NRSV-27043",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "32",
        "text": "\nNow the whole group of those who believed were of one heart and soul, and no one claimed private ownership of any possessions, but everything they owned was held in common. \n",
        "headerReference": "en-NRSV-27044",
        "title": "\nThe Believers Share Their Possessions\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "33",
        "text": "With great power the apostles gave their testimony to the resurrection of the Lord Jesus, and great grace was upon them all. ",
        "reference": "en-NRSV-27045",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "34",
        "text": "There was not a needy person among them, for as many as owned lands or houses sold them and brought the proceeds of what was sold. ",
        "reference": "en-NRSV-27046",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "35",
        "text": "They laid it at the apostles’ feet, and it was distributed to each as any had need. ",
        "reference": "en-NRSV-27047",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "36",
        "text": "There was a Levite, a native of Cyprus, Joseph, to whom the apostles gave the name Barnabas (which means “son of encouragement”). ",
        "reference": "en-NRSV-27048",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "4",
        "verse": "37",
        "text": "He sold a field that belonged to him, then brought the money, and laid it at the apostles’ feet.",
        "reference": "en-NRSV-27049",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "1",
        "text": "But a man named Ananias, with the consent of his wife Sapphira, sold a piece of property; ",
        "headerReference": "en-NRSV-27050",
        "title": "\nAnanias and Sapphira\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "2",
        "text": "with his wife’s knowledge, he kept back some of the proceeds, and brought only a part and laid it at the apostles’ feet. ",
        "reference": "en-NRSV-27051",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "3",
        "text": "“Ananias,” Peter asked, “why has Satan filled your heart to lie to the Holy Spirit and to keep back part of the proceeds of the land? ",
        "reference": "en-NRSV-27052",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "4",
        "text": "While it remained unsold, did it not remain your own? And after it was sold, were not the proceeds at your disposal? How is it that you have contrived this deed in your heart? You did not lie to us but to God!” ",
        "reference": "en-NRSV-27053",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "5",
        "text": "Now when Ananias heard these words, he fell down and died. And great fear seized all who heard of it. ",
        "reference": "en-NRSV-27054",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "6",
        "text": "The young men came and wrapped up his body, then carried him out and buried him.",
        "reference": "en-NRSV-27055",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "7",
        "text": "After an interval of about three hours his wife came in, not knowing what had happened. ",
        "reference": "en-NRSV-27056",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "8",
        "text": "Peter said to her, “Tell me whether you and your husband sold the land for such and such a price.” And she said, “Yes, that was the price.” ",
        "reference": "en-NRSV-27057",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "9",
        "text": "Then Peter said to her, “How is it that you have agreed together to put the Spirit of the Lord to the test? Look, the feet of those who have buried your husband are at the door, and they will carry you out.” ",
        "reference": "en-NRSV-27058",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "10",
        "text": "Immediately she fell down at his feet and died. When the young men came in they found her dead, so they carried her out and buried her beside her husband. ",
        "reference": "en-NRSV-27059",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "11",
        "text": "And great fear seized the whole church and all who heard of these things.",
        "reference": "en-NRSV-27060",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "12",
        "text": "\nNow many signs and wonders were done among the people through the apostles. And they were all together in Solomon’s Portico. \n",
        "headerReference": "en-NRSV-27061",
        "title": "\nThe Apostles Heal Many\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "13",
        "text": "None of the rest dared to join them, but the people held them in high esteem. ",
        "reference": "en-NRSV-27062",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "14",
        "text": "Yet more than ever believers were added to the Lord, great numbers of both men and women, ",
        "reference": "en-NRSV-27063",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "15",
        "text": "so that they even carried out the sick into the streets, and laid them on cots and mats, in order that Peter’s shadow might fall on some of them as he came by. ",
        "reference": "en-NRSV-27064",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "16",
        "text": "A great number of people would also gather from the towns around Jerusalem, bringing the sick and those tormented by unclean spirits, and they were all cured.",
        "reference": "en-NRSV-27065",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "17",
        "text": "\nThen the high priest took action; he and all who were with him (that is, the sect of the Sadducees), being filled with jealousy, \n",
        "headerReference": "en-NRSV-27066",
        "title": "\nThe Apostles Are Persecuted\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "18",
        "text": "arrested the apostles and put them in the public prison. ",
        "reference": "en-NRSV-27067",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "19",
        "text": "But during the night an angel of the Lord opened the prison doors, brought them out, and said, ",
        "reference": "en-NRSV-27068",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "20",
        "text": "“Go, stand in the temple and tell the people the whole message about this life.” ",
        "reference": "en-NRSV-27069",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "21",
        "text": "When they heard this, they entered the temple at daybreak and went on with their teaching. \nWhen the high priest and those with him arrived, they called together the council and the whole body of the elders of Israel, and sent to the prison to have them brought. \n",
        "reference": "en-NRSV-27070",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "22",
        "text": "But when the temple police went there, they did not find them in the prison; so they returned and reported, ",
        "reference": "en-NRSV-27071",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "23",
        "text": "“We found the prison securely locked and the guards standing at the doors, but when we opened them, we found no one inside.” ",
        "reference": "en-NRSV-27072",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "24",
        "text": "Now when the captain of the temple and the chief priests heard these words, they were perplexed about them, wondering what might be going on. ",
        "reference": "en-NRSV-27073",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "25",
        "text": "Then someone arrived and announced, “Look, the men whom you put in prison are standing in the temple and teaching the people!” ",
        "reference": "en-NRSV-27074",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "26",
        "text": "Then the captain went with the temple police and brought them, but without violence, for they were afraid of being stoned by the people.",
        "reference": "en-NRSV-27075",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "27",
        "text": "When they had brought them, they had them stand before the council. The high priest questioned them, ",
        "reference": "en-NRSV-27076",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "28",
        "text": "saying, “We gave you strict orders not to teach in this name, yet here you have filled Jerusalem with your teaching and you are determined to bring this man’s blood on us.” ",
        "reference": "en-NRSV-27077",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "29",
        "text": "But Peter and the apostles answered, “We must obey God rather than any human authority. ",
        "reference": "en-NRSV-27078",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "30",
        "text": "The God of our ancestors raised up Jesus, whom you had killed by hanging him on a tree. ",
        "reference": "en-NRSV-27079",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "31",
        "text": "God exalted him at his right hand as Leader and Savior that he might give repentance to Israel and forgiveness of sins. ",
        "reference": "en-NRSV-27080",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "32",
        "text": "And we are witnesses to these things, and so is the Holy Spirit whom God has given to those who obey him.”",
        "reference": "en-NRSV-27081",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "33",
        "text": "When they heard this, they were enraged and wanted to kill them. ",
        "reference": "en-NRSV-27082",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "34",
        "text": "But a Pharisee in the council named Gamaliel, a teacher of the law, respected by all the people, stood up and ordered the men to be put outside for a short time. ",
        "reference": "en-NRSV-27083",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "35",
        "text": "Then he said to them, “Fellow Israelites, consider carefully what you propose to do to these men. ",
        "reference": "en-NRSV-27084",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "36",
        "text": "For some time ago Theudas rose up, claiming to be somebody, and a number of men, about four hundred, joined him; but he was killed, and all who followed him were dispersed and disappeared. ",
        "reference": "en-NRSV-27085",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "37",
        "text": "After him Judas the Galilean rose up at the time of the census and got people to follow him; he also perished, and all who followed him were scattered. ",
        "reference": "en-NRSV-27086",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "38",
        "text": "So in the present case, I tell you, keep away from these men and let them alone; because if this plan or this undertaking is of human origin, it will fail; ",
        "reference": "en-NRSV-27087",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "39",
        "text": "but if it is of God, you will not be able to overthrow them—in that case you may even be found fighting against God!” \nThey were convinced by him, \n",
        "reference": "en-NRSV-27088",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "40",
        "text": "and when they had called in the apostles, they had them flogged. Then they ordered them not to speak in the name of Jesus, and let them go. ",
        "reference": "en-NRSV-27089",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "41",
        "text": "As they left the council, they rejoiced that they were considered worthy to suffer dishonor for the sake of the name. ",
        "reference": "en-NRSV-27090",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "5",
        "verse": "42",
        "text": "And every day in the temple and at home they did not cease to teach and proclaim Jesus as the Messiah.",
        "reference": "en-NRSV-27091",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "1",
        "text": "Now during those days, when the disciples were increasing in number, the Hellenists complained against the Hebrews because their widows were being neglected in the daily distribution of food. ",
        "headerReference": "en-NRSV-27092",
        "title": "\nSeven Chosen to Serve\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "2",
        "text": "And the twelve called together the whole community of the disciples and said, “It is not right that we should neglect the word of God in order to wait on tables. ",
        "reference": "en-NRSV-27093",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "3",
        "text": "Therefore, friends, select from among yourselves seven men of good standing, full of the Spirit and of wisdom, whom we may appoint to this task, ",
        "reference": "en-NRSV-27094",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "4",
        "text": "while we, for our part, will devote ourselves to prayer and to serving the word.” ",
        "reference": "en-NRSV-27095",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "5",
        "text": "What they said pleased the whole community, and they chose Stephen, a man full of faith and the Holy Spirit, together with Philip, Prochorus, Nicanor, Timon, Parmenas, and Nicolaus, a proselyte of Antioch. ",
        "reference": "en-NRSV-27096",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "6",
        "text": "They had these men stand before the apostles, who prayed and laid their hands on them.",
        "reference": "en-NRSV-27097",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "7",
        "text": "The word of God continued to spread; the number of the disciples increased greatly in Jerusalem, and a great many of the priests became obedient to the faith.",
        "reference": "en-NRSV-27098",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "8",
        "text": "\nStephen, full of grace and power, did great wonders and signs among the people. \n",
        "headerReference": "en-NRSV-27099",
        "title": "\nThe Arrest of Stephen\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "9",
        "text": "Then some of those who belonged to the synagogue of the Freedmen (as it was called), Cyrenians, Alexandrians, and others of those from Cilicia and Asia, stood up and argued with Stephen. ",
        "reference": "en-NRSV-27100",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "10",
        "text": "But they could not withstand the wisdom and the Spirit with which he spoke. ",
        "reference": "en-NRSV-27101",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "11",
        "text": "Then they secretly instigated some men to say, “We have heard him speak blasphemous words against Moses and God.” ",
        "reference": "en-NRSV-27102",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "12",
        "text": "They stirred up the people as well as the elders and the scribes; then they suddenly confronted him, seized him, and brought him before the council. ",
        "reference": "en-NRSV-27103",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "13",
        "text": "They set up false witnesses who said, “This man never stops saying things against this holy place and the law; ",
        "reference": "en-NRSV-27104",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "14",
        "text": "for we have heard him say that this Jesus of Nazareth will destroy this place and will change the customs that Moses handed on to us.” ",
        "reference": "en-NRSV-27105",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "6",
        "verse": "15",
        "text": "And all who sat in the council looked intently at him, and they saw that his face was like the face of an angel.",
        "reference": "en-NRSV-27106",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "1",
        "text": "Then the high priest asked him, “Are these things so?” ",
        "headerReference": "en-NRSV-27107",
        "title": "\nStephen’s Speech to the Council\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "2",
        "text": "And Stephen replied: \n“Brothers and fathers, listen to me. The God of glory appeared to our ancestor Abraham when he was in Mesopotamia, before he lived in Haran, \n",
        "reference": "en-NRSV-27108",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "3",
        "text": "and said to him, ‘Leave your country and your relatives and go to the land that I will show you.’ ",
        "reference": "en-NRSV-27109",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "4",
        "text": "Then he left the country of the Chaldeans and settled in Haran. After his father died, God had him move from there to this country in which you are now living. ",
        "reference": "en-NRSV-27110",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "5",
        "text": "He did not give him any of it as a heritage, not even a foot’s length, but promised to give it to him as his possession and to his descendants after him, even though he had no child. ",
        "reference": "en-NRSV-27111",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "6",
        "text": "And God spoke in these terms, that his descendants would be resident aliens in a country belonging to others, who would enslave them and mistreat them during four hundred years. ",
        "reference": "en-NRSV-27112",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "7",
        "text": "‘But I will judge the nation that they serve,’ said God, ‘and after that they shall come out and worship me in this place.’ ",
        "reference": "en-NRSV-27113",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "8",
        "text": "Then he gave him the covenant of circumcision. And so Abraham became the father of Isaac and circumcised him on the eighth day; and Isaac became the father of Jacob, and Jacob of the twelve patriarchs.",
        "reference": "en-NRSV-27114",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "9",
        "text": "“The patriarchs, jealous of Joseph, sold him into Egypt; but God was with him, ",
        "reference": "en-NRSV-27115",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "10",
        "text": "and rescued him from all his afflictions, and enabled him to win favor and to show wisdom when he stood before Pharaoh, king of Egypt, who appointed him ruler over Egypt and over all his household. ",
        "reference": "en-NRSV-27116",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "11",
        "text": "Now there came a famine throughout Egypt and Canaan, and great suffering, and our ancestors could find no food. ",
        "reference": "en-NRSV-27117",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "12",
        "text": "But when Jacob heard that there was grain in Egypt, he sent our ancestors there on their first visit. ",
        "reference": "en-NRSV-27118",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "13",
        "text": "On the second visit Joseph made himself known to his brothers, and Joseph’s family became known to Pharaoh. ",
        "reference": "en-NRSV-27119",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "14",
        "text": "Then Joseph sent and invited his father Jacob and all his relatives to come to him, seventy-five in all; ",
        "reference": "en-NRSV-27120",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "15",
        "text": "so Jacob went down to Egypt. He himself died there as well as our ancestors, ",
        "reference": "en-NRSV-27121",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "16",
        "text": "and their bodies were brought back to Shechem and laid in the tomb that Abraham had bought for a sum of silver from the sons of Hamor in Shechem.",
        "reference": "en-NRSV-27122",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "17",
        "text": "“But as the time drew near for the fulfillment of the promise that God had made to Abraham, our people in Egypt increased and multiplied ",
        "reference": "en-NRSV-27123",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "18",
        "text": "until another king who had not known Joseph ruled over Egypt. ",
        "reference": "en-NRSV-27124",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "19",
        "text": "He dealt craftily with our race and forced our ancestors to abandon their infants so that they would die. ",
        "reference": "en-NRSV-27125",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "20",
        "text": "At this time Moses was born, and he was beautiful before God. For three months he was brought up in his father’s house; ",
        "reference": "en-NRSV-27126",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "21",
        "text": "and when he was abandoned, Pharaoh’s daughter adopted him and brought him up as her own son. ",
        "reference": "en-NRSV-27127",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "22",
        "text": "So Moses was instructed in all the wisdom of the Egyptians and was powerful in his words and deeds.",
        "reference": "en-NRSV-27128",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "23",
        "text": "“When he was forty years old, it came into his heart to visit his relatives, the Israelites. ",
        "reference": "en-NRSV-27129",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "24",
        "text": "When he saw one of them being wronged, he defended the oppressed man and avenged him by striking down the Egyptian. ",
        "reference": "en-NRSV-27130",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "25",
        "text": "He supposed that his kinsfolk would understand that God through him was rescuing them, but they did not understand. ",
        "reference": "en-NRSV-27131",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "26",
        "text": "The next day he came to some of them as they were quarreling and tried to reconcile them, saying, ‘Men, you are brothers; why do you wrong each other?’ ",
        "reference": "en-NRSV-27132",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "27",
        "text": "But the man who was wronging his neighbor pushed Moses aside, saying, ‘Who made you a ruler and a judge over us? ",
        "reference": "en-NRSV-27133",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "28",
        "text": "Do you want to kill me as you killed the Egyptian yesterday?’ ",
        "reference": "en-NRSV-27134",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "29",
        "text": "When he heard this, Moses fled and became a resident alien in the land of Midian. There he became the father of two sons.",
        "reference": "en-NRSV-27135",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "30",
        "text": "“Now when forty years had passed, an angel appeared to him in the wilderness of Mount Sinai, in the flame of a burning bush. ",
        "reference": "en-NRSV-27136",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "31",
        "text": "When Moses saw it, he was amazed at the sight; and as he approached to look, there came the voice of the Lord: ",
        "reference": "en-NRSV-27137",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "32",
        "text": "‘I am the God of your ancestors, the God of Abraham, Isaac, and Jacob.’ Moses began to tremble and did not dare to look. ",
        "reference": "en-NRSV-27138",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "33",
        "text": "Then the Lord said to him, ‘Take off the sandals from your feet, for the place where you are standing is holy ground. ",
        "reference": "en-NRSV-27139",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "34",
        "text": "I have surely seen the mistreatment of my people who are in Egypt and have heard their groaning, and I have come down to rescue them. Come now, I will send you to Egypt.’",
        "reference": "en-NRSV-27140",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "35",
        "text": "“It was this Moses whom they rejected when they said, ‘Who made you a ruler and a judge?’ and whom God now sent as both ruler and liberator through the angel who appeared to him in the bush. ",
        "reference": "en-NRSV-27141",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "36",
        "text": "He led them out, having performed wonders and signs in Egypt, at the Red Sea, and in the wilderness for forty years. ",
        "reference": "en-NRSV-27142",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "37",
        "text": "This is the Moses who said to the Israelites, ‘God will raise up a prophet for you from your own people as he raised me up.’ ",
        "reference": "en-NRSV-27143",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "38",
        "text": "He is the one who was in the congregation in the wilderness with the angel who spoke to him at Mount Sinai, and with our ancestors; and he received living oracles to give to us. ",
        "reference": "en-NRSV-27144",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "39",
        "text": "Our ancestors were unwilling to obey him; instead, they pushed him aside, and in their hearts they turned back to Egypt, ",
        "reference": "en-NRSV-27145",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "40",
        "text": "saying to Aaron, ‘Make gods for us who will lead the way for us; as for this Moses who led us out from the land of Egypt, we do not know what has happened to him.’ ",
        "reference": "en-NRSV-27146",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "41",
        "text": "At that time they made a calf, offered a sacrifice to the idol, and reveled in the works of their hands. ",
        "reference": "en-NRSV-27147",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "42",
        "text": "But God turned away from them and handed them over to worship the host of heaven, as it is written in the book of the prophets: \n‘Did you offer to me slain victims and sacrifices    \n \nforty years in the wilderness, O house of Israel?\n",
        "reference": "en-NRSV-27148",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "43",
        "text": "No; you took along the tent of Moloch,     \nand the star of your god Rephan,\n \nthe images that you made to worship;\n \nso I will remove you beyond Babylon.’\n",
        "reference": "en-NRSV-27149",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "44",
        "text": "“Our ancestors had the tent of testimony in the wilderness, as God directed when he spoke to Moses, ordering him to make it according to the pattern he had seen. ",
        "reference": "en-NRSV-27150",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "45",
        "text": "Our ancestors in turn brought it in with Joshua when they dispossessed the nations that God drove out before our ancestors. And it was there until the time of David, ",
        "reference": "en-NRSV-27151",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "46",
        "text": "who found favor with God and asked that he might find a dwelling place for the house of Jacob. ",
        "reference": "en-NRSV-27152",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "47",
        "text": "But it was Solomon who built a house for him. ",
        "reference": "en-NRSV-27153",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "48",
        "text": "Yet the Most High does not dwell in houses made with human hands; as the prophet says,",
        "reference": "en-NRSV-27154",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "49",
        "text": "‘Heaven is my throne,     \nand the earth is my footstool.\n \nWhat kind of house will you build for me, says the Lord,    \n \nor what is the place of my rest?\n",
        "reference": "en-NRSV-27155",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "50",
        "text": "Did not my hand make all these things?’",
        "reference": "en-NRSV-27156",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "51",
        "text": "“You stiff-necked people, uncircumcised in heart and ears, you are forever opposing the Holy Spirit, just as your ancestors used to do. ",
        "reference": "en-NRSV-27157",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "52",
        "text": "Which of the prophets did your ancestors not persecute? They killed those who foretold the coming of the Righteous One, and now you have become his betrayers and murderers. ",
        "reference": "en-NRSV-27158",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "53",
        "text": "You are the ones that received the law as ordained by angels, and yet you have not kept it.”",
        "reference": "en-NRSV-27159",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "54",
        "text": "\nWhen they heard these things, they became enraged and ground their teeth at Stephen. \n",
        "headerReference": "en-NRSV-27160",
        "title": "\nThe Stoning of Stephen\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "55",
        "text": "But filled with the Holy Spirit, he gazed into heaven and saw the glory of God and Jesus standing at the right hand of God. ",
        "reference": "en-NRSV-27161",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "56",
        "text": "“Look,” he said, “I see the heavens opened and the Son of Man standing at the right hand of God!” ",
        "reference": "en-NRSV-27162",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "57",
        "text": "But they covered their ears, and with a loud shout all rushed together against him. ",
        "reference": "en-NRSV-27163",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "58",
        "text": "Then they dragged him out of the city and began to stone him; and the witnesses laid their coats at the feet of a young man named Saul. ",
        "reference": "en-NRSV-27164",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "59",
        "text": "While they were stoning Stephen, he prayed, “Lord Jesus, receive my spirit.” ",
        "reference": "en-NRSV-27165",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "7",
        "verse": "60",
        "text": "Then he knelt down and cried out in a loud voice, “Lord, do not hold this sin against them.” When he had said this, he died. ",
        "reference": "en-NRSV-27166",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "1",
        "text": "\nThat day a severe persecution began against the church in Jerusalem, and all except the apostles were scattered throughout the countryside of Judea and Samaria. \n",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "2",
        "text": "Devout men buried Stephen and made loud lamentation over him. ",
        "reference": "en-NRSV-27168",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "3",
        "text": "But Saul was ravaging the church by entering house after house; dragging off both men and women, he committed them to prison.",
        "reference": "en-NRSV-27169",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "4",
        "text": "\nNow those who were scattered went from place to place, proclaiming the word. \n",
        "headerReference": "en-NRSV-27170",
        "title": "\nPhilip Preaches in Samaria\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "5",
        "text": "Philip went down to the city of Samaria and proclaimed the Messiah to them. ",
        "reference": "en-NRSV-27171",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "6",
        "text": "The crowds with one accord listened eagerly to what was said by Philip, hearing and seeing the signs that he did, ",
        "reference": "en-NRSV-27172",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "7",
        "text": "for unclean spirits, crying with loud shrieks, came out of many who were possessed; and many others who were paralyzed or lame were cured. ",
        "reference": "en-NRSV-27173",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "8",
        "text": "So there was great joy in that city.",
        "reference": "en-NRSV-27174",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "9",
        "text": "Now a certain man named Simon had previously practiced magic in the city and amazed the people of Samaria, saying that he was someone great. ",
        "reference": "en-NRSV-27175",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "10",
        "text": "All of them, from the least to the greatest, listened to him eagerly, saying, “This man is the power of God that is called Great.” ",
        "reference": "en-NRSV-27176",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "11",
        "text": "And they listened eagerly to him because for a long time he had amazed them with his magic. ",
        "reference": "en-NRSV-27177",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "12",
        "text": "But when they believed Philip, who was proclaiming the good news about the kingdom of God and the name of Jesus Christ, they were baptized, both men and women. ",
        "reference": "en-NRSV-27178",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "13",
        "text": "Even Simon himself believed. After being baptized, he stayed constantly with Philip and was amazed when he saw the signs and great miracles that took place.",
        "reference": "en-NRSV-27179",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "14",
        "text": "Now when the apostles at Jerusalem heard that Samaria had accepted the word of God, they sent Peter and John to them. ",
        "reference": "en-NRSV-27180",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "15",
        "text": "The two went down and prayed for them that they might receive the Holy Spirit ",
        "reference": "en-NRSV-27181",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "16",
        "text": "(for as yet the Spirit had not come upon any of them; they had only been baptized in the name of the Lord Jesus). ",
        "reference": "en-NRSV-27182",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "17",
        "text": "Then Peter and John laid their hands on them, and they received the Holy Spirit. ",
        "reference": "en-NRSV-27183",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "18",
        "text": "Now when Simon saw that the Spirit was given through the laying on of the apostles’ hands, he offered them money, ",
        "reference": "en-NRSV-27184",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "19",
        "text": "saying, “Give me also this power so that anyone on whom I lay my hands may receive the Holy Spirit.” ",
        "reference": "en-NRSV-27185",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "20",
        "text": "But Peter said to him, “May your silver perish with you, because you thought you could obtain God’s gift with money! ",
        "reference": "en-NRSV-27186",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "21",
        "text": "You have no part or share in this, for your heart is not right before God. ",
        "reference": "en-NRSV-27187",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "22",
        "text": "Repent therefore of this wickedness of yours, and pray to the Lord that, if possible, the intent of your heart may be forgiven you. ",
        "reference": "en-NRSV-27188",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "23",
        "text": "For I see that you are in the gall of bitterness and the chains of wickedness.” ",
        "reference": "en-NRSV-27189",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "24",
        "text": "Simon answered, “Pray for me to the Lord, that nothing of what you have said may happen to me.”",
        "reference": "en-NRSV-27190",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "25",
        "text": "Now after Peter and John had testified and spoken the word of the Lord, they returned to Jerusalem, proclaiming the good news to many villages of the Samaritans.",
        "reference": "en-NRSV-27191",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "26",
        "text": "\nThen an angel of the Lord said to Philip, “Get up and go toward the south to the road that goes down from Jerusalem to Gaza.” (This is a wilderness road.) \n",
        "headerReference": "en-NRSV-27192",
        "title": "\nPhilip and the Ethiopian Eunuch\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "27",
        "text": "So he got up and went. Now there was an Ethiopian eunuch, a court official of the Candace, queen of the Ethiopians, in charge of her entire treasury. He had come to Jerusalem to worship ",
        "reference": "en-NRSV-27193",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "28",
        "text": "and was returning home; seated in his chariot, he was reading the prophet Isaiah. ",
        "reference": "en-NRSV-27194",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "29",
        "text": "Then the Spirit said to Philip, “Go over to this chariot and join it.” ",
        "reference": "en-NRSV-27195",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "30",
        "text": "So Philip ran up to it and heard him reading the prophet Isaiah. He asked, “Do you understand what you are reading?” ",
        "reference": "en-NRSV-27196",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "31",
        "text": "He replied, “How can I, unless someone guides me?” And he invited Philip to get in and sit beside him. ",
        "reference": "en-NRSV-27197",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "32",
        "text": "Now the passage of the scripture that he was reading was this: \n“Like a sheep he was led to the slaughter,    \n \nand like a lamb silent before its shearer,\n \nso he does not open his mouth.\n",
        "reference": "en-NRSV-27198",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "33",
        "text": "In his humiliation justice was denied him.     \nWho can describe his generation?\n \nFor his life is taken away from the earth.”\n",
        "reference": "en-NRSV-27199",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "34",
        "text": "The eunuch asked Philip, “About whom, may I ask you, does the prophet say this, about himself or about someone else?” ",
        "reference": "en-NRSV-27200",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "35",
        "text": "Then Philip began to speak, and starting with this scripture, he proclaimed to him the good news about Jesus. ",
        "reference": "en-NRSV-27201",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "36",
        "text": "As they were going along the road, they came to some water; and the eunuch said, “Look, here is water! What is to prevent me from being baptized?” ",
        "reference": "en-NRSV-27202",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "38",
        "text": "He commanded the chariot to stop, and both of them, Philip and the eunuch, went down into the water, and Philip baptized him. ",
        "reference": "en-NRSV-27203",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "39",
        "text": "When they came up out of the water, the Spirit of the Lord snatched Philip away; the eunuch saw him no more, and went on his way rejoicing. ",
        "reference": "en-NRSV-27204",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "8",
        "verse": "40",
        "text": "But Philip found himself at Azotus, and as he was passing through the region, he proclaimed the good news to all the towns until he came to Caesarea.",
        "reference": "en-NRSV-27205",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "1",
        "text": "Meanwhile Saul, still breathing threats and murder against the disciples of the Lord, went to the high priest ",
        "headerReference": "en-NRSV-27206",
        "title": "\nThe Conversion of Saul\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "2",
        "text": "and asked him for letters to the synagogues at Damascus, so that if he found any who belonged to the Way, men or women, he might bring them bound to Jerusalem. ",
        "reference": "en-NRSV-27207",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "3",
        "text": "Now as he was going along and approaching Damascus, suddenly a light from heaven flashed around him. ",
        "reference": "en-NRSV-27208",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "4",
        "text": "He fell to the ground and heard a voice saying to him, “Saul, Saul, why do you persecute me?” ",
        "reference": "en-NRSV-27209",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "5",
        "text": "He asked, “Who are you, Lord?” The reply came, “I am Jesus, whom you are persecuting. ",
        "reference": "en-NRSV-27210",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "6",
        "text": "But get up and enter the city, and you will be told what you are to do.” ",
        "reference": "en-NRSV-27211",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "7",
        "text": "The men who were traveling with him stood speechless because they heard the voice but saw no one. ",
        "reference": "en-NRSV-27212",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "8",
        "text": "Saul got up from the ground, and though his eyes were open, he could see nothing; so they led him by the hand and brought him into Damascus. ",
        "reference": "en-NRSV-27213",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "9",
        "text": "For three days he was without sight, and neither ate nor drank.",
        "reference": "en-NRSV-27214",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "10",
        "text": "Now there was a disciple in Damascus named Ananias. The Lord said to him in a vision, “Ananias.” He answered, “Here I am, Lord.” ",
        "reference": "en-NRSV-27215",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "11",
        "text": "The Lord said to him, “Get up and go to the street called Straight, and at the house of Judas look for a man of Tarsus named Saul. At this moment he is praying, ",
        "reference": "en-NRSV-27216",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "12",
        "text": "and he has seen in a vision a man named Ananias come in and lay his hands on him so that he might regain his sight.” ",
        "reference": "en-NRSV-27217",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "13",
        "text": "But Ananias answered, “Lord, I have heard from many about this man, how much evil he has done to your saints in Jerusalem; ",
        "reference": "en-NRSV-27218",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "14",
        "text": "and here he has authority from the chief priests to bind all who invoke your name.” ",
        "reference": "en-NRSV-27219",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "15",
        "text": "But the Lord said to him, “Go, for he is an instrument whom I have chosen to bring my name before Gentiles and kings and before the people of Israel; ",
        "reference": "en-NRSV-27220",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "16",
        "text": "I myself will show him how much he must suffer for the sake of my name.” ",
        "reference": "en-NRSV-27221",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "17",
        "text": "So Ananias went and entered the house. He laid his hands on Saul and said, “Brother Saul, the Lord Jesus, who appeared to you on your way here, has sent me so that you may regain your sight and be filled with the Holy Spirit.” ",
        "reference": "en-NRSV-27222",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "18",
        "text": "And immediately something like scales fell from his eyes, and his sight was restored. Then he got up and was baptized, ",
        "reference": "en-NRSV-27223",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "19",
        "text": "and after taking some food, he regained his strength. \nFor several days he was with the disciples in Damascus, \n",
        "reference": "en-NRSV-27224",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "20",
        "text": "and immediately he began to proclaim Jesus in the synagogues, saying, “He is the Son of God.” ",
        "reference": "en-NRSV-27225",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "21",
        "text": "All who heard him were amazed and said, “Is not this the man who made havoc in Jerusalem among those who invoked this name? And has he not come here for the purpose of bringing them bound before the chief priests?” ",
        "reference": "en-NRSV-27226",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "22",
        "text": "Saul became increasingly more powerful and confounded the Jews who lived in Damascus by proving that Jesus was the Messiah.",
        "reference": "en-NRSV-27227",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "23",
        "text": "\nAfter some time had passed, the Jews plotted to kill him, \n",
        "headerReference": "en-NRSV-27228",
        "title": "\nSaul Escapes from the Jews\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "24",
        "text": "but their plot became known to Saul. They were watching the gates day and night so that they might kill him; ",
        "reference": "en-NRSV-27229",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "25",
        "text": "but his disciples took him by night and let him down through an opening in the wall, lowering him in a basket.",
        "reference": "en-NRSV-27230",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "26",
        "text": "\nWhen he had come to Jerusalem, he attempted to join the disciples; and they were all afraid of him, for they did not believe that he was a disciple. \n",
        "headerReference": "en-NRSV-27231",
        "title": "\nSaul in Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "27",
        "text": "But Barnabas took him, brought him to the apostles, and described for them how on the road he had seen the Lord, who had spoken to him, and how in Damascus he had spoken boldly in the name of Jesus. ",
        "reference": "en-NRSV-27232",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "28",
        "text": "So he went in and out among them in Jerusalem, speaking boldly in the name of the Lord. ",
        "reference": "en-NRSV-27233",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "29",
        "text": "He spoke and argued with the Hellenists; but they were attempting to kill him. ",
        "reference": "en-NRSV-27234",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "30",
        "text": "When the believers learned of it, they brought him down to Caesarea and sent him off to Tarsus.",
        "reference": "en-NRSV-27235",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "31",
        "text": "Meanwhile the church throughout Judea, Galilee, and Samaria had peace and was built up. Living in the fear of the Lord and in the comfort of the Holy Spirit, it increased in numbers.",
        "reference": "en-NRSV-27236",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "32",
        "text": "\nNow as Peter went here and there among all the believers, he came down also to the saints living in Lydda. \n",
        "headerReference": "en-NRSV-27237",
        "title": "\nThe Healing of Aeneas\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "33",
        "text": "There he found a man named Aeneas, who had been bedridden for eight years, for he was paralyzed. ",
        "reference": "en-NRSV-27238",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "34",
        "text": "Peter said to him, “Aeneas, Jesus Christ heals you; get up and make your bed!” And immediately he got up. ",
        "reference": "en-NRSV-27239",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "35",
        "text": "And all the residents of Lydda and Sharon saw him and turned to the Lord.",
        "reference": "en-NRSV-27240",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "36",
        "text": "\nNow in Joppa there was a disciple whose name was Tabitha, which in Greek is Dorcas. She was devoted to good works and acts of charity. \n",
        "headerReference": "en-NRSV-27241",
        "title": "\nPeter in Lydda and Joppa\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "37",
        "text": "At that time she became ill and died. When they had washed her, they laid her in a room upstairs. ",
        "reference": "en-NRSV-27242",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "38",
        "text": "Since Lydda was near Joppa, the disciples, who heard that Peter was there, sent two men to him with the request, “Please come to us without delay.” ",
        "reference": "en-NRSV-27243",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "39",
        "text": "So Peter got up and went with them; and when he arrived, they took him to the room upstairs. All the widows stood beside him, weeping and showing tunics and other clothing that Dorcas had made while she was with them. ",
        "reference": "en-NRSV-27244",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "40",
        "text": "Peter put all of them outside, and then he knelt down and prayed. He turned to the body and said, “Tabitha, get up.” Then she opened her eyes, and seeing Peter, she sat up. ",
        "reference": "en-NRSV-27245",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "41",
        "text": "He gave her his hand and helped her up. Then calling the saints and widows, he showed her to be alive. ",
        "reference": "en-NRSV-27246",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "42",
        "text": "This became known throughout Joppa, and many believed in the Lord. ",
        "reference": "en-NRSV-27247",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "9",
        "verse": "43",
        "text": "Meanwhile he stayed in Joppa for some time with a certain Simon, a tanner.",
        "reference": "en-NRSV-27248",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "1",
        "text": "In Caesarea there was a man named Cornelius, a centurion of the Italian Cohort, as it was called. ",
        "headerReference": "en-NRSV-27249",
        "title": "\nPeter and Cornelius\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "2",
        "text": "He was a devout man who feared God with all his household; he gave alms generously to the people and prayed constantly to God. ",
        "reference": "en-NRSV-27250",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "3",
        "text": "One afternoon at about three o’clock he had a vision in which he clearly saw an angel of God coming in and saying to him, “Cornelius.” ",
        "reference": "en-NRSV-27251",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "4",
        "text": "He stared at him in terror and said, “What is it, Lord?” He answered, “Your prayers and your alms have ascended as a memorial before God. ",
        "reference": "en-NRSV-27252",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "5",
        "text": "Now send men to Joppa for a certain Simon who is called Peter; ",
        "reference": "en-NRSV-27253",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "6",
        "text": "he is lodging with Simon, a tanner, whose house is by the seaside.” ",
        "reference": "en-NRSV-27254",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "7",
        "text": "When the angel who spoke to him had left, he called two of his slaves and a devout soldier from the ranks of those who served him, ",
        "reference": "en-NRSV-27255",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "8",
        "text": "and after telling them everything, he sent them to Joppa.",
        "reference": "en-NRSV-27256",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "9",
        "text": "About noon the next day, as they were on their journey and approaching the city, Peter went up on the roof to pray. ",
        "reference": "en-NRSV-27257",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "10",
        "text": "He became hungry and wanted something to eat; and while it was being prepared, he fell into a trance. ",
        "reference": "en-NRSV-27258",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "11",
        "text": "He saw the heaven opened and something like a large sheet coming down, being lowered to the ground by its four corners. ",
        "reference": "en-NRSV-27259",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "12",
        "text": "In it were all kinds of four-footed creatures and reptiles and birds of the air. ",
        "reference": "en-NRSV-27260",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "13",
        "text": "Then he heard a voice saying, “Get up, Peter; kill and eat.” ",
        "reference": "en-NRSV-27261",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "14",
        "text": "But Peter said, “By no means, Lord; for I have never eaten anything that is profane or unclean.” ",
        "reference": "en-NRSV-27262",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "15",
        "text": "The voice said to him again, a second time, “What God has made clean, you must not call profane.” ",
        "reference": "en-NRSV-27263",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "16",
        "text": "This happened three times, and the thing was suddenly taken up to heaven.",
        "reference": "en-NRSV-27264",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "17",
        "text": "Now while Peter was greatly puzzled about what to make of the vision that he had seen, suddenly the men sent by Cornelius appeared. They were asking for Simon’s house and were standing by the gate. ",
        "reference": "en-NRSV-27265",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "18",
        "text": "They called out to ask whether Simon, who was called Peter, was staying there. ",
        "reference": "en-NRSV-27266",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "19",
        "text": "While Peter was still thinking about the vision, the Spirit said to him, “Look, three men are searching for you. ",
        "reference": "en-NRSV-27267",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "20",
        "text": "Now get up, go down, and go with them without hesitation; for I have sent them.” ",
        "reference": "en-NRSV-27268",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "21",
        "text": "So Peter went down to the men and said, “I am the one you are looking for; what is the reason for your coming?” ",
        "reference": "en-NRSV-27269",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "22",
        "text": "They answered, “Cornelius, a centurion, an upright and God-fearing man, who is well spoken of by the whole Jewish nation, was directed by a holy angel to send for you to come to his house and to hear what you have to say.” ",
        "reference": "en-NRSV-27270",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "23",
        "text": "So Peter invited them in and gave them lodging. \nThe next day he got up and went with them, and some of the believers from Joppa accompanied him. \n",
        "reference": "en-NRSV-27271",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "24",
        "text": "The following day they came to Caesarea. Cornelius was expecting them and had called together his relatives and close friends. ",
        "reference": "en-NRSV-27272",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "25",
        "text": "On Peter’s arrival Cornelius met him, and falling at his feet, worshiped him. ",
        "reference": "en-NRSV-27273",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "26",
        "text": "But Peter made him get up, saying, “Stand up; I am only a mortal.” ",
        "reference": "en-NRSV-27274",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "27",
        "text": "And as he talked with him, he went in and found that many had assembled; ",
        "reference": "en-NRSV-27275",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "28",
        "text": "and he said to them, “You yourselves know that it is unlawful for a Jew to associate with or to visit a Gentile; but God has shown me that I should not call anyone profane or unclean. ",
        "reference": "en-NRSV-27276",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "29",
        "text": "So when I was sent for, I came without objection. Now may I ask why you sent for me?”",
        "reference": "en-NRSV-27277",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "30",
        "text": "Cornelius replied, “Four days ago at this very hour, at three o’clock, I was praying in my house when suddenly a man in dazzling clothes stood before me. ",
        "reference": "en-NRSV-27278",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "31",
        "text": "He said, ‘Cornelius, your prayer has been heard and your alms have been remembered before God. ",
        "reference": "en-NRSV-27279",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "32",
        "text": "Send therefore to Joppa and ask for Simon, who is called Peter; he is staying in the home of Simon, a tanner, by the sea.’ ",
        "reference": "en-NRSV-27280",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "33",
        "text": "Therefore I sent for you immediately, and you have been kind enough to come. So now all of us are here in the presence of God to listen to all that the Lord has commanded you to say.”",
        "reference": "en-NRSV-27281",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "34",
        "text": "\nThen Peter began to speak to them: “I truly understand that God shows no partiality, \n",
        "headerReference": "en-NRSV-27282",
        "title": "\nGentiles Hear the Good News\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "35",
        "text": "but in every nation anyone who fears him and does what is right is acceptable to him. ",
        "reference": "en-NRSV-27283",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "36",
        "text": "You know the message he sent to the people of Israel, preaching peace by Jesus Christ—he is Lord of all. ",
        "reference": "en-NRSV-27284",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "37",
        "text": "That message spread throughout Judea, beginning in Galilee after the baptism that John announced: ",
        "reference": "en-NRSV-27285",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "38",
        "text": "how God anointed Jesus of Nazareth with the Holy Spirit and with power; how he went about doing good and healing all who were oppressed by the devil, for God was with him. ",
        "reference": "en-NRSV-27286",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "39",
        "text": "We are witnesses to all that he did both in Judea and in Jerusalem. They put him to death by hanging him on a tree; ",
        "reference": "en-NRSV-27287",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "40",
        "text": "but God raised him on the third day and allowed him to appear, ",
        "reference": "en-NRSV-27288",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "41",
        "text": "not to all the people but to us who were chosen by God as witnesses, and who ate and drank with him after he rose from the dead. ",
        "reference": "en-NRSV-27289",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "42",
        "text": "He commanded us to preach to the people and to testify that he is the one ordained by God as judge of the living and the dead. ",
        "reference": "en-NRSV-27290",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "43",
        "text": "All the prophets testify about him that everyone who believes in him receives forgiveness of sins through his name.”",
        "reference": "en-NRSV-27291",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "44",
        "text": "\nWhile Peter was still speaking, the Holy Spirit fell upon all who heard the word. \n",
        "headerReference": "en-NRSV-27292",
        "title": "\nGentiles Receive the Holy Spirit\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "45",
        "text": "The circumcised believers who had come with Peter were astounded that the gift of the Holy Spirit had been poured out even on the Gentiles, ",
        "reference": "en-NRSV-27293",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "46",
        "text": "for they heard them speaking in tongues and extolling God. Then Peter said, ",
        "reference": "en-NRSV-27294",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "47",
        "text": "“Can anyone withhold the water for baptizing these people who have received the Holy Spirit just as we have?” ",
        "reference": "en-NRSV-27295",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "10",
        "verse": "48",
        "text": "So he ordered them to be baptized in the name of Jesus Christ. Then they invited him to stay for several days.",
        "reference": "en-NRSV-27296",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "1",
        "text": "Now the apostles and the believers who were in Judea heard that the Gentiles had also accepted the word of God. ",
        "headerReference": "en-NRSV-27297",
        "title": "\nPeter’s Report to the Church at Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "2",
        "text": "So when Peter went up to Jerusalem, the circumcised believers criticized him, ",
        "reference": "en-NRSV-27298",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "3",
        "text": "saying, “Why did you go to uncircumcised men and eat with them?” ",
        "reference": "en-NRSV-27299",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "4",
        "text": "Then Peter began to explain it to them, step by step, saying, ",
        "reference": "en-NRSV-27300",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "5",
        "text": "“I was in the city of Joppa praying, and in a trance I saw a vision. There was something like a large sheet coming down from heaven, being lowered by its four corners; and it came close to me. ",
        "reference": "en-NRSV-27301",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "6",
        "text": "As I looked at it closely I saw four-footed animals, beasts of prey, reptiles, and birds of the air. ",
        "reference": "en-NRSV-27302",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "7",
        "text": "I also heard a voice saying to me, ‘Get up, Peter; kill and eat.’ ",
        "reference": "en-NRSV-27303",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "8",
        "text": "But I replied, ‘By no means, Lord; for nothing profane or unclean has ever entered my mouth.’ ",
        "reference": "en-NRSV-27304",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "9",
        "text": "But a second time the voice answered from heaven, ‘What God has made clean, you must not call profane.’ ",
        "reference": "en-NRSV-27305",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "10",
        "text": "This happened three times; then everything was pulled up again to heaven. ",
        "reference": "en-NRSV-27306",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "11",
        "text": "At that very moment three men, sent to me from Caesarea, arrived at the house where we were. ",
        "reference": "en-NRSV-27307",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "12",
        "text": "The Spirit told me to go with them and not to make a distinction between them and us. These six brothers also accompanied me, and we entered the man’s house. ",
        "reference": "en-NRSV-27308",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "13",
        "text": "He told us how he had seen the angel standing in his house and saying, ‘Send to Joppa and bring Simon, who is called Peter; ",
        "reference": "en-NRSV-27309",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "14",
        "text": "he will give you a message by which you and your entire household will be saved.’ ",
        "reference": "en-NRSV-27310",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "15",
        "text": "And as I began to speak, the Holy Spirit fell upon them just as it had upon us at the beginning. ",
        "reference": "en-NRSV-27311",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "16",
        "text": "And I remembered the word of the Lord, how he had said, ‘John baptized with water, but you will be baptized with the Holy Spirit.’ ",
        "reference": "en-NRSV-27312",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "17",
        "text": "If then God gave them the same gift that he gave us when we believed in the Lord Jesus Christ, who was I that I could hinder God?” ",
        "reference": "en-NRSV-27313",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "18",
        "text": "When they heard this, they were silenced. And they praised God, saying, “Then God has given even to the Gentiles the repentance that leads to life.”",
        "reference": "en-NRSV-27314",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "19",
        "text": "\nNow those who were scattered because of the persecution that took place over Stephen traveled as far as Phoenicia, Cyprus, and Antioch, and they spoke the word to no one except Jews. \n",
        "headerReference": "en-NRSV-27315",
        "title": "\nThe Church in Antioch\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "20",
        "text": "But among them were some men of Cyprus and Cyrene who, on coming to Antioch, spoke to the Hellenists also, proclaiming the Lord Jesus. ",
        "reference": "en-NRSV-27316",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "21",
        "text": "The hand of the Lord was with them, and a great number became believers and turned to the Lord. ",
        "reference": "en-NRSV-27317",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "22",
        "text": "News of this came to the ears of the church in Jerusalem, and they sent Barnabas to Antioch. ",
        "reference": "en-NRSV-27318",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "23",
        "text": "When he came and saw the grace of God, he rejoiced, and he exhorted them all to remain faithful to the Lord with steadfast devotion; ",
        "reference": "en-NRSV-27319",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "24",
        "text": "for he was a good man, full of the Holy Spirit and of faith. And a great many people were brought to the Lord. ",
        "reference": "en-NRSV-27320",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "25",
        "text": "Then Barnabas went to Tarsus to look for Saul, ",
        "reference": "en-NRSV-27321",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "26",
        "text": "and when he had found him, he brought him to Antioch. So it was that for an entire year they met with the church and taught a great many people, and it was in Antioch that the disciples were first called “Christians.”",
        "reference": "en-NRSV-27322",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "27",
        "text": "At that time prophets came down from Jerusalem to Antioch. ",
        "reference": "en-NRSV-27323",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "28",
        "text": "One of them named Agabus stood up and predicted by the Spirit that there would be a severe famine over all the world; and this took place during the reign of Claudius. ",
        "reference": "en-NRSV-27324",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "29",
        "text": "The disciples determined that according to their ability, each would send relief to the believers living in Judea; ",
        "reference": "en-NRSV-27325",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "11",
        "verse": "30",
        "text": "this they did, sending it to the elders by Barnabas and Saul.",
        "reference": "en-NRSV-27326",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "1",
        "text": "About that time King Herod laid violent hands upon some who belonged to the church. ",
        "headerReference": "en-NRSV-27327",
        "title": "\nJames Killed and Peter Imprisoned\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "2",
        "text": "He had James, the brother of John, killed with the sword. ",
        "reference": "en-NRSV-27328",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "3",
        "text": "After he saw that it pleased the Jews, he proceeded to arrest Peter also. (This was during the festival of Unleavened Bread.) ",
        "reference": "en-NRSV-27329",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "4",
        "text": "When he had seized him, he put him in prison and handed him over to four squads of soldiers to guard him, intending to bring him out to the people after the Passover. ",
        "reference": "en-NRSV-27330",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "5",
        "text": "While Peter was kept in prison, the church prayed fervently to God for him.",
        "reference": "en-NRSV-27331",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "6",
        "text": "\nThe very night before Herod was going to bring him out, Peter, bound with two chains, was sleeping between two soldiers, while guards in front of the door were keeping watch over the prison. \n",
        "headerReference": "en-NRSV-27332",
        "title": "\nPeter Delivered from Prison\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "7",
        "text": "Suddenly an angel of the Lord appeared and a light shone in the cell. He tapped Peter on the side and woke him, saying, “Get up quickly.” And the chains fell off his wrists. ",
        "reference": "en-NRSV-27333",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "8",
        "text": "The angel said to him, “Fasten your belt and put on your sandals.” He did so. Then he said to him, “Wrap your cloak around you and follow me.” ",
        "reference": "en-NRSV-27334",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "9",
        "text": "Peter went out and followed him; he did not realize that what was happening with the angel’s help was real; he thought he was seeing a vision. ",
        "reference": "en-NRSV-27335",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "10",
        "text": "After they had passed the first and the second guard, they came before the iron gate leading into the city. It opened for them of its own accord, and they went outside and walked along a lane, when suddenly the angel left him. ",
        "reference": "en-NRSV-27336",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "11",
        "text": "Then Peter came to himself and said, “Now I am sure that the Lord has sent his angel and rescued me from the hands of Herod and from all that the Jewish people were expecting.”",
        "reference": "en-NRSV-27337",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "12",
        "text": "As soon as he realized this, he went to the house of Mary, the mother of John whose other name was Mark, where many had gathered and were praying. ",
        "reference": "en-NRSV-27338",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "13",
        "text": "When he knocked at the outer gate, a maid named Rhoda came to answer. ",
        "reference": "en-NRSV-27339",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "14",
        "text": "On recognizing Peter’s voice, she was so overjoyed that, instead of opening the gate, she ran in and announced that Peter was standing at the gate. ",
        "reference": "en-NRSV-27340",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "15",
        "text": "They said to her, “You are out of your mind!” But she insisted that it was so. They said, “It is his angel.” ",
        "reference": "en-NRSV-27341",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "16",
        "text": "Meanwhile Peter continued knocking; and when they opened the gate, they saw him and were amazed. ",
        "reference": "en-NRSV-27342",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "17",
        "text": "He motioned to them with his hand to be silent, and described for them how the Lord had brought him out of the prison. And he added, “Tell this to James and to the believers.” Then he left and went to another place.",
        "reference": "en-NRSV-27343",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "18",
        "text": "When morning came, there was no small commotion among the soldiers over what had become of Peter. ",
        "reference": "en-NRSV-27344",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "19",
        "text": "When Herod had searched for him and could not find him, he examined the guards and ordered them to be put to death. Then he went down from Judea to Caesarea and stayed there.",
        "reference": "en-NRSV-27345",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "20",
        "text": "\nNow Herod was angry with the people of Tyre and Sidon. So they came to him in a body; and after winning over Blastus, the king’s chamberlain, they asked for a reconciliation, because their country depended on the king’s country for food. \n",
        "headerReference": "en-NRSV-27346",
        "title": "\nThe Death of Herod\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "21",
        "text": "On an appointed day Herod put on his royal robes, took his seat on the platform, and delivered a public address to them. ",
        "reference": "en-NRSV-27347",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "22",
        "text": "The people kept shouting, “The voice of a god, and not of a mortal!” ",
        "reference": "en-NRSV-27348",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "23",
        "text": "And immediately, because he had not given the glory to God, an angel of the Lord struck him down, and he was eaten by worms and died.",
        "reference": "en-NRSV-27349",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "24",
        "text": "But the word of God continued to advance and gain adherents. ",
        "reference": "en-NRSV-27350",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "12",
        "verse": "25",
        "text": "Then after completing their mission Barnabas and Saul returned to Jerusalem and brought with them John, whose other name was Mark.",
        "reference": "en-NRSV-27351",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "1",
        "text": "Now in the church at Antioch there were prophets and teachers: Barnabas, Simeon who was called Niger, Lucius of Cyrene, Manaen a member of the court of Herod the ruler, and Saul. ",
        "headerReference": "en-NRSV-27352",
        "title": "\nBarnabas and Saul Commissioned\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "2",
        "text": "While they were worshiping the Lord and fasting, the Holy Spirit said, “Set apart for me Barnabas and Saul for the work to which I have called them.” ",
        "reference": "en-NRSV-27353",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "3",
        "text": "Then after fasting and praying they laid their hands on them and sent them off.",
        "reference": "en-NRSV-27354",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "4",
        "text": "\nSo, being sent out by the Holy Spirit, they went down to Seleucia; and from there they sailed to Cyprus. \n",
        "headerReference": "en-NRSV-27355",
        "title": "\nThe Apostles Preach in Cyprus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "5",
        "text": "When they arrived at Salamis, they proclaimed the word of God in the synagogues of the Jews. And they had John also to assist them. ",
        "reference": "en-NRSV-27356",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "6",
        "text": "When they had gone through the whole island as far as Paphos, they met a certain magician, a Jewish false prophet, named Bar-Jesus. ",
        "reference": "en-NRSV-27357",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "7",
        "text": "He was with the proconsul, Sergius Paulus, an intelligent man, who summoned Barnabas and Saul and wanted to hear the word of God. ",
        "reference": "en-NRSV-27358",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "8",
        "text": "But the magician Elymas (for that is the translation of his name) opposed them and tried to turn the proconsul away from the faith. ",
        "reference": "en-NRSV-27359",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "9",
        "text": "But Saul, also known as Paul, filled with the Holy Spirit, looked intently at him ",
        "reference": "en-NRSV-27360",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "10",
        "text": "and said, “You son of the devil, you enemy of all righteousness, full of all deceit and villainy, will you not stop making crooked the straight paths of the Lord? ",
        "reference": "en-NRSV-27361",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "11",
        "text": "And now listen—the hand of the Lord is against you, and you will be blind for a while, unable to see the sun.” Immediately mist and darkness came over him, and he went about groping for someone to lead him by the hand. ",
        "reference": "en-NRSV-27362",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "12",
        "text": "When the proconsul saw what had happened, he believed, for he was astonished at the teaching about the Lord.",
        "reference": "en-NRSV-27363",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "13",
        "text": "\nThen Paul and his companions set sail from Paphos and came to Perga in Pamphylia. John, however, left them and returned to Jerusalem; \n",
        "headerReference": "en-NRSV-27364",
        "title": "\nPaul and Barnabas in Antioch of Pisidia\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "14",
        "text": "but they went on from Perga and came to Antioch in Pisidia. And on the sabbath day they went into the synagogue and sat down. ",
        "reference": "en-NRSV-27365",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "15",
        "text": "After the reading of the law and the prophets, the officials of the synagogue sent them a message, saying, “Brothers, if you have any word of exhortation for the people, give it.” ",
        "reference": "en-NRSV-27366",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "16",
        "text": "So Paul stood up and with a gesture began to speak: \n“You Israelites, and others who fear God, listen. \n",
        "reference": "en-NRSV-27367",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "17",
        "text": "The God of this people Israel chose our ancestors and made the people great during their stay in the land of Egypt, and with uplifted arm he led them out of it. ",
        "reference": "en-NRSV-27368",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "18",
        "text": "For about forty years he put up with them in the wilderness. ",
        "reference": "en-NRSV-27369",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "19",
        "text": "After he had destroyed seven nations in the land of Canaan, he gave them their land as an inheritance ",
        "reference": "en-NRSV-27370",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "20",
        "text": "for about four hundred fifty years. After that he gave them judges until the time of the prophet Samuel. ",
        "reference": "en-NRSV-27371",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "21",
        "text": "Then they asked for a king; and God gave them Saul son of Kish, a man of the tribe of Benjamin, who reigned for forty years. ",
        "reference": "en-NRSV-27372",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "22",
        "text": "When he had removed him, he made David their king. In his testimony about him he said, ‘I have found David, son of Jesse, to be a man after my heart, who will carry out all my wishes.’ ",
        "reference": "en-NRSV-27373",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "23",
        "text": "Of this man’s posterity God has brought to Israel a Savior, Jesus, as he promised; ",
        "reference": "en-NRSV-27374",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "24",
        "text": "before his coming John had already proclaimed a baptism of repentance to all the people of Israel. ",
        "reference": "en-NRSV-27375",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "25",
        "text": "And as John was finishing his work, he said, ‘What do you suppose that I am? I am not he. No, but one is coming after me; I am not worthy to untie the thong of the sandals on his feet.’",
        "reference": "en-NRSV-27376",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "26",
        "text": "“My brothers, you descendants of Abraham’s family, and others who fear God, to us the message of this salvation has been sent. ",
        "reference": "en-NRSV-27377",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "27",
        "text": "Because the residents of Jerusalem and their leaders did not recognize him or understand the words of the prophets that are read every sabbath, they fulfilled those words by condemning him. ",
        "reference": "en-NRSV-27378",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "28",
        "text": "Even though they found no cause for a sentence of death, they asked Pilate to have him killed. ",
        "reference": "en-NRSV-27379",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "29",
        "text": "When they had carried out everything that was written about him, they took him down from the tree and laid him in a tomb. ",
        "reference": "en-NRSV-27380",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "30",
        "text": "But God raised him from the dead; ",
        "reference": "en-NRSV-27381",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "31",
        "text": "and for many days he appeared to those who came up with him from Galilee to Jerusalem, and they are now his witnesses to the people. ",
        "reference": "en-NRSV-27382",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "32",
        "text": "And we bring you the good news that what God promised to our ancestors ",
        "reference": "en-NRSV-27383",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "33",
        "text": "he has fulfilled for us, their children, by raising Jesus; as also it is written in the second psalm, \n‘You are my Son;    \n \ntoday I have begotten you.’\n",
        "reference": "en-NRSV-27384",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "34",
        "text": "As to his raising him from the dead, no more to return to corruption, he has spoken in this way, \n‘I will give you the holy promises made to David.’\n",
        "reference": "en-NRSV-27385",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "35",
        "text": "Therefore he has also said in another psalm, \n‘You will not let your Holy One experience corruption.’\n",
        "reference": "en-NRSV-27386",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "36",
        "text": "For David, after he had served the purpose of God in his own generation, died, was laid beside his ancestors, and experienced corruption; ",
        "reference": "en-NRSV-27387",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "37",
        "text": "but he whom God raised up experienced no corruption. ",
        "reference": "en-NRSV-27388",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "38",
        "text": "Let it be known to you therefore, my brothers, that through this man forgiveness of sins is proclaimed to you; ",
        "reference": "en-NRSV-27389",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "39",
        "text": "by this Jesus everyone who believes is set free from all those sins from which you could not be freed by the law of Moses. ",
        "reference": "en-NRSV-27390",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "40",
        "text": "Beware, therefore, that what the prophets said does not happen to you:",
        "reference": "en-NRSV-27391",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "41",
        "text": "‘Look, you scoffers!     \nBe amazed and perish,\n \nfor in your days I am doing a work,    \n \na work that you will never believe, even if someone tells you.’”\n",
        "reference": "en-NRSV-27392",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "42",
        "text": "As Paul and Barnabas were going out, the people urged them to speak about these things again the next sabbath. ",
        "reference": "en-NRSV-27393",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "43",
        "text": "When the meeting of the synagogue broke up, many Jews and devout converts to Judaism followed Paul and Barnabas, who spoke to them and urged them to continue in the grace of God.",
        "reference": "en-NRSV-27394",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "44",
        "text": "The next sabbath almost the whole city gathered to hear the word of the Lord. ",
        "reference": "en-NRSV-27395",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "45",
        "text": "But when the Jews saw the crowds, they were filled with jealousy; and blaspheming, they contradicted what was spoken by Paul. ",
        "reference": "en-NRSV-27396",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "46",
        "text": "Then both Paul and Barnabas spoke out boldly, saying, “It was necessary that the word of God should be spoken first to you. Since you reject it and judge yourselves to be unworthy of eternal life, we are now turning to the Gentiles. ",
        "reference": "en-NRSV-27397",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "47",
        "text": "For so the Lord has commanded us, saying, \n‘I have set you to be a light for the Gentiles,    \n \nso that you may bring salvation to the ends of the earth.’”\n",
        "reference": "en-NRSV-27398",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "48",
        "text": "When the Gentiles heard this, they were glad and praised the word of the Lord; and as many as had been destined for eternal life became believers. ",
        "reference": "en-NRSV-27399",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "49",
        "text": "Thus the word of the Lord spread throughout the region. ",
        "reference": "en-NRSV-27400",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "50",
        "text": "But the Jews incited the devout women of high standing and the leading men of the city, and stirred up persecution against Paul and Barnabas, and drove them out of their region. ",
        "reference": "en-NRSV-27401",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "51",
        "text": "So they shook the dust off their feet in protest against them, and went to Iconium. ",
        "reference": "en-NRSV-27402",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "13",
        "verse": "52",
        "text": "And the disciples were filled with joy and with the Holy Spirit.",
        "reference": "en-NRSV-27403",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "1",
        "text": "The same thing occurred in Iconium, where Paul and Barnabas went into the Jewish synagogue and spoke in such a way that a great number of both Jews and Greeks became believers. ",
        "headerReference": "en-NRSV-27404",
        "title": "\nPaul and Barnabas in Iconium\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "2",
        "text": "But the unbelieving Jews stirred up the Gentiles and poisoned their minds against the brothers. ",
        "reference": "en-NRSV-27405",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "3",
        "text": "So they remained for a long time, speaking boldly for the Lord, who testified to the word of his grace by granting signs and wonders to be done through them. ",
        "reference": "en-NRSV-27406",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "4",
        "text": "But the residents of the city were divided; some sided with the Jews, and some with the apostles. ",
        "reference": "en-NRSV-27407",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "5",
        "text": "And when an attempt was made by both Gentiles and Jews, with their rulers, to mistreat them and to stone them, ",
        "reference": "en-NRSV-27408",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "6",
        "text": "the apostles learned of it and fled to Lystra and Derbe, cities of Lycaonia, and to the surrounding country; ",
        "reference": "en-NRSV-27409",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "7",
        "text": "and there they continued proclaiming the good news.",
        "reference": "en-NRSV-27410",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "8",
        "text": "\nIn Lystra there was a man sitting who could not use his feet and had never walked, for he had been crippled from birth. \n",
        "headerReference": "en-NRSV-27411",
        "title": "\nPaul and Barnabas in Lystra and Derbe\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "9",
        "text": "He listened to Paul as he was speaking. And Paul, looking at him intently and seeing that he had faith to be healed, ",
        "reference": "en-NRSV-27412",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "10",
        "text": "said in a loud voice, “Stand upright on your feet.” And the man sprang up and began to walk. ",
        "reference": "en-NRSV-27413",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "11",
        "text": "When the crowds saw what Paul had done, they shouted in the Lycaonian language, “The gods have come down to us in human form!” ",
        "reference": "en-NRSV-27414",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "12",
        "text": "Barnabas they called Zeus, and Paul they called Hermes, because he was the chief speaker. ",
        "reference": "en-NRSV-27415",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "13",
        "text": "The priest of Zeus, whose temple was just outside the city, brought oxen and garlands to the gates; he and the crowds wanted to offer sacrifice. ",
        "reference": "en-NRSV-27416",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "14",
        "text": "When the apostles Barnabas and Paul heard of it, they tore their clothes and rushed out into the crowd, shouting, ",
        "reference": "en-NRSV-27417",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "15",
        "text": "“Friends, why are you doing this? We are mortals just like you, and we bring you good news, that you should turn from these worthless things to the living God, who made the heaven and the earth and the sea and all that is in them. ",
        "reference": "en-NRSV-27418",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "16",
        "text": "In past generations he allowed all the nations to follow their own ways; ",
        "reference": "en-NRSV-27419",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "17",
        "text": "yet he has not left himself without a witness in doing good—giving you rains from heaven and fruitful seasons, and filling you with food and your hearts with joy.” ",
        "reference": "en-NRSV-27420",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "18",
        "text": "Even with these words, they scarcely restrained the crowds from offering sacrifice to them.",
        "reference": "en-NRSV-27421",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "19",
        "text": "But Jews came there from Antioch and Iconium and won over the crowds. Then they stoned Paul and dragged him out of the city, supposing that he was dead. ",
        "reference": "en-NRSV-27422",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "20",
        "text": "But when the disciples surrounded him, he got up and went into the city. The next day he went on with Barnabas to Derbe.",
        "reference": "en-NRSV-27423",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "21",
        "text": "\nAfter they had proclaimed the good news to that city and had made many disciples, they returned to Lystra, then on to Iconium and Antioch. \n",
        "headerReference": "en-NRSV-27424",
        "title": "\nThe Return to Antioch in Syria\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "22",
        "text": "There they strengthened the souls of the disciples and encouraged them to continue in the faith, saying, “It is through many persecutions that we must enter the kingdom of God.” ",
        "reference": "en-NRSV-27425",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "23",
        "text": "And after they had appointed elders for them in each church, with prayer and fasting they entrusted them to the Lord in whom they had come to believe.",
        "reference": "en-NRSV-27426",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "24",
        "text": "Then they passed through Pisidia and came to Pamphylia. ",
        "reference": "en-NRSV-27427",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "25",
        "text": "When they had spoken the word in Perga, they went down to Attalia. ",
        "reference": "en-NRSV-27428",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "26",
        "text": "From there they sailed back to Antioch, where they had been commended to the grace of God for the work that they had completed. ",
        "reference": "en-NRSV-27429",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "27",
        "text": "When they arrived, they called the church together and related all that God had done with them, and how he had opened a door of faith for the Gentiles. ",
        "reference": "en-NRSV-27430",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "14",
        "verse": "28",
        "text": "And they stayed there with the disciples for some time.",
        "reference": "en-NRSV-27431",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "1",
        "text": "Then certain individuals came down from Judea and were teaching the brothers, “Unless you are circumcised according to the custom of Moses, you cannot be saved.” ",
        "headerReference": "en-NRSV-27432",
        "title": "\nThe Council at Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "2",
        "text": "And after Paul and Barnabas had no small dissension and debate with them, Paul and Barnabas and some of the others were appointed to go up to Jerusalem to discuss this question with the apostles and the elders. ",
        "reference": "en-NRSV-27433",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "3",
        "text": "So they were sent on their way by the church, and as they passed through both Phoenicia and Samaria, they reported the conversion of the Gentiles, and brought great joy to all the believers. ",
        "reference": "en-NRSV-27434",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "4",
        "text": "When they came to Jerusalem, they were welcomed by the church and the apostles and the elders, and they reported all that God had done with them. ",
        "reference": "en-NRSV-27435",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "5",
        "text": "But some believers who belonged to the sect of the Pharisees stood up and said, “It is necessary for them to be circumcised and ordered to keep the law of Moses.”",
        "reference": "en-NRSV-27436",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "6",
        "text": "The apostles and the elders met together to consider this matter. ",
        "reference": "en-NRSV-27437",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "7",
        "text": "After there had been much debate, Peter stood up and said to them, “My brothers, you know that in the early days God made a choice among you, that I should be the one through whom the Gentiles would hear the message of the good news and become believers. ",
        "reference": "en-NRSV-27438",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "8",
        "text": "And God, who knows the human heart, testified to them by giving them the Holy Spirit, just as he did to us; ",
        "reference": "en-NRSV-27439",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "9",
        "text": "and in cleansing their hearts by faith he has made no distinction between them and us. ",
        "reference": "en-NRSV-27440",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "10",
        "text": "Now therefore why are you putting God to the test by placing on the neck of the disciples a yoke that neither our ancestors nor we have been able to bear? ",
        "reference": "en-NRSV-27441",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "11",
        "text": "On the contrary, we believe that we will be saved through the grace of the Lord Jesus, just as they will.”",
        "reference": "en-NRSV-27442",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "12",
        "text": "The whole assembly kept silence, and listened to Barnabas and Paul as they told of all the signs and wonders that God had done through them among the Gentiles. ",
        "reference": "en-NRSV-27443",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "13",
        "text": "After they finished speaking, James replied, “My brothers, listen to me. ",
        "reference": "en-NRSV-27444",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "14",
        "text": "Simeon has related how God first looked favorably on the Gentiles, to take from among them a people for his name. ",
        "reference": "en-NRSV-27445",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "15",
        "text": "This agrees with the words of the prophets, as it is written,",
        "reference": "en-NRSV-27446",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "16",
        "text": "‘After this I will return, \nand I will rebuild the dwelling of David, which has fallen;    \n \nfrom its ruins I will rebuild it,\n \nand I will set it up,\n",
        "reference": "en-NRSV-27447",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "17",
        "text": "so that all other peoples may seek the Lord—     \neven all the Gentiles over whom my name has been called.\n \nThus says the Lord, who has been making these things \n",
        "reference": "en-NRSV-27448",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "18",
        "text": "known from long ago.’",
        "reference": "en-NRSV-27449",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "19",
        "text": "Therefore I have reached the decision that we should not trouble those Gentiles who are turning to God, ",
        "reference": "en-NRSV-27450",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "20",
        "text": "but we should write to them to abstain only from things polluted by idols and from fornication and from whatever has been strangled and from blood. ",
        "reference": "en-NRSV-27451",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "21",
        "text": "For in every city, for generations past, Moses has had those who proclaim him, for he has been read aloud every sabbath in the synagogues.”",
        "reference": "en-NRSV-27452",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "22",
        "text": "\nThen the apostles and the elders, with the consent of the whole church, decided to choose men from among their members and to send them to Antioch with Paul and Barnabas. They sent Judas called Barsabbas, and Silas, leaders among the brothers, \n",
        "headerReference": "en-NRSV-27453",
        "title": "\nThe Council’s Letter to Gentile Believers\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "23",
        "text": "with the following letter: “The brothers, both the apostles and the elders, to the believers of Gentile origin in Antioch and Syria and Cilicia, greetings. ",
        "reference": "en-NRSV-27454",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "24",
        "text": "Since we have heard that certain persons who have gone out from us, though with no instructions from us, have said things to disturb you and have unsettled your minds, ",
        "reference": "en-NRSV-27455",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "25",
        "text": "we have decided unanimously to choose representatives and send them to you, along with our beloved Barnabas and Paul, ",
        "reference": "en-NRSV-27456",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "26",
        "text": "who have risked their lives for the sake of our Lord Jesus Christ. ",
        "reference": "en-NRSV-27457",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "27",
        "text": "We have therefore sent Judas and Silas, who themselves will tell you the same things by word of mouth. ",
        "reference": "en-NRSV-27458",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "28",
        "text": "For it has seemed good to the Holy Spirit and to us to impose on you no further burden than these essentials: ",
        "reference": "en-NRSV-27459",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "29",
        "text": "that you abstain from what has been sacrificed to idols and from blood and from what is strangled and from fornication. If you keep yourselves from these, you will do well. Farewell.”",
        "reference": "en-NRSV-27460",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "30",
        "text": "So they were sent off and went down to Antioch. When they gathered the congregation together, they delivered the letter. ",
        "reference": "en-NRSV-27461",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "31",
        "text": "When its members read it, they rejoiced at the exhortation. ",
        "reference": "en-NRSV-27462",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "32",
        "text": "Judas and Silas, who were themselves prophets, said much to encourage and strengthen the believers. ",
        "reference": "en-NRSV-27463",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "33",
        "text": "After they had been there for some time, they were sent off in peace by the believers to those who had sent them. ",
        "reference": "en-NRSV-27464",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "35",
        "text": "But Paul and Barnabas remained in Antioch, and there, with many others, they taught and proclaimed the word of the Lord.",
        "reference": "en-NRSV-27465",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "36",
        "text": "\nAfter some days Paul said to Barnabas, “Come, let us return and visit the believers in every city where we proclaimed the word of the Lord and see how they are doing.” \n",
        "headerReference": "en-NRSV-27466",
        "title": "\nPaul and Barnabas Separate\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "37",
        "text": "Barnabas wanted to take with them John called Mark. ",
        "reference": "en-NRSV-27467",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "38",
        "text": "But Paul decided not to take with them one who had deserted them in Pamphylia and had not accompanied them in the work. ",
        "reference": "en-NRSV-27468",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "39",
        "text": "The disagreement became so sharp that they parted company; Barnabas took Mark with him and sailed away to Cyprus. ",
        "reference": "en-NRSV-27469",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "40",
        "text": "But Paul chose Silas and set out, the believers commending him to the grace of the Lord. ",
        "reference": "en-NRSV-27470",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "15",
        "verse": "41",
        "text": "He went through Syria and Cilicia, strengthening the churches.",
        "reference": "en-NRSV-27471",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "1",
        "text": "Paul went on also to Derbe and to Lystra, where there was a disciple named Timothy, the son of a Jewish woman who was a believer; but his father was a Greek. ",
        "headerReference": "en-NRSV-27472",
        "title": "\nTimothy Joins Paul and Silas\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "2",
        "text": "He was well spoken of by the believers in Lystra and Iconium. ",
        "reference": "en-NRSV-27473",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "3",
        "text": "Paul wanted Timothy to accompany him; and he took him and had him circumcised because of the Jews who were in those places, for they all knew that his father was a Greek. ",
        "reference": "en-NRSV-27474",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "4",
        "text": "As they went from town to town, they delivered to them for observance the decisions that had been reached by the apostles and elders who were in Jerusalem. ",
        "reference": "en-NRSV-27475",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "5",
        "text": "So the churches were strengthened in the faith and increased in numbers daily.",
        "reference": "en-NRSV-27476",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "6",
        "text": "\nThey went through the region of Phrygia and Galatia, having been forbidden by the Holy Spirit to speak the word in Asia. \n",
        "headerReference": "en-NRSV-27477",
        "title": "\nPaul’s Vision of the Man of Macedonia\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "7",
        "text": "When they had come opposite Mysia, they attempted to go into Bithynia, but the Spirit of Jesus did not allow them; ",
        "reference": "en-NRSV-27478",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "8",
        "text": "so, passing by Mysia, they went down to Troas. ",
        "reference": "en-NRSV-27479",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "9",
        "text": "During the night Paul had a vision: there stood a man of Macedonia pleading with him and saying, “Come over to Macedonia and help us.” ",
        "reference": "en-NRSV-27480",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "10",
        "text": "When he had seen the vision, we immediately tried to cross over to Macedonia, being convinced that God had called us to proclaim the good news to them.",
        "reference": "en-NRSV-27481",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "11",
        "text": "\nWe set sail from Troas and took a straight course to Samothrace, the following day to Neapolis, \n",
        "headerReference": "en-NRSV-27482",
        "title": "\nThe Conversion of Lydia\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "12",
        "text": "and from there to Philippi, which is a leading city of the district of Macedonia and a Roman colony. We remained in this city for some days. ",
        "reference": "en-NRSV-27483",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "13",
        "text": "On the sabbath day we went outside the gate by the river, where we supposed there was a place of prayer; and we sat down and spoke to the women who had gathered there. ",
        "reference": "en-NRSV-27484",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "14",
        "text": "A certain woman named Lydia, a worshiper of God, was listening to us; she was from the city of Thyatira and a dealer in purple cloth. The Lord opened her heart to listen eagerly to what was said by Paul. ",
        "reference": "en-NRSV-27485",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "15",
        "text": "When she and her household were baptized, she urged us, saying, “If you have judged me to be faithful to the Lord, come and stay at my home.” And she prevailed upon us.",
        "reference": "en-NRSV-27486",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "16",
        "text": "\nOne day, as we were going to the place of prayer, we met a slave-girl who had a spirit of divination and brought her owners a great deal of money by fortune-telling. \n",
        "headerReference": "en-NRSV-27487",
        "title": "\nPaul and Silas in Prison\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "17",
        "text": "While she followed Paul and us, she would cry out, “These men are slaves of the Most High God, who proclaim to you a way of salvation.” ",
        "reference": "en-NRSV-27488",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "18",
        "text": "She kept doing this for many days. But Paul, very much annoyed, turned and said to the spirit, “I order you in the name of Jesus Christ to come out of her.” And it came out that very hour.",
        "reference": "en-NRSV-27489",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "19",
        "text": "But when her owners saw that their hope of making money was gone, they seized Paul and Silas and dragged them into the marketplace before the authorities. ",
        "reference": "en-NRSV-27490",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "20",
        "text": "When they had brought them before the magistrates, they said, “These men are disturbing our city; they are Jews ",
        "reference": "en-NRSV-27491",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "21",
        "text": "and are advocating customs that are not lawful for us as Romans to adopt or observe.” ",
        "reference": "en-NRSV-27492",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "22",
        "text": "The crowd joined in attacking them, and the magistrates had them stripped of their clothing and ordered them to be beaten with rods. ",
        "reference": "en-NRSV-27493",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "23",
        "text": "After they had given them a severe flogging, they threw them into prison and ordered the jailer to keep them securely. ",
        "reference": "en-NRSV-27494",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "24",
        "text": "Following these instructions, he put them in the innermost cell and fastened their feet in the stocks.",
        "reference": "en-NRSV-27495",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "25",
        "text": "About midnight Paul and Silas were praying and singing hymns to God, and the prisoners were listening to them. ",
        "reference": "en-NRSV-27496",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "26",
        "text": "Suddenly there was an earthquake, so violent that the foundations of the prison were shaken; and immediately all the doors were opened and everyone’s chains were unfastened. ",
        "reference": "en-NRSV-27497",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "27",
        "text": "When the jailer woke up and saw the prison doors wide open, he drew his sword and was about to kill himself, since he supposed that the prisoners had escaped. ",
        "reference": "en-NRSV-27498",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "28",
        "text": "But Paul shouted in a loud voice, “Do not harm yourself, for we are all here.” ",
        "reference": "en-NRSV-27499",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "29",
        "text": "The jailer called for lights, and rushing in, he fell down trembling before Paul and Silas. ",
        "reference": "en-NRSV-27500",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "30",
        "text": "Then he brought them outside and said, “Sirs, what must I do to be saved?” ",
        "reference": "en-NRSV-27501",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "31",
        "text": "They answered, “Believe on the Lord Jesus, and you will be saved, you and your household.” ",
        "reference": "en-NRSV-27502",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "32",
        "text": "They spoke the word of the Lord to him and to all who were in his house. ",
        "reference": "en-NRSV-27503",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "33",
        "text": "At the same hour of the night he took them and washed their wounds; then he and his entire family were baptized without delay. ",
        "reference": "en-NRSV-27504",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "34",
        "text": "He brought them up into the house and set food before them; and he and his entire household rejoiced that he had become a believer in God.",
        "reference": "en-NRSV-27505",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "35",
        "text": "When morning came, the magistrates sent the police, saying, “Let those men go.” ",
        "reference": "en-NRSV-27506",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "36",
        "text": "And the jailer reported the message to Paul, saying, “The magistrates sent word to let you go; therefore come out now and go in peace.” ",
        "reference": "en-NRSV-27507",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "37",
        "text": "But Paul replied, “They have beaten us in public, uncondemned, men who are Roman citizens, and have thrown us into prison; and now are they going to discharge us in secret? Certainly not! Let them come and take us out themselves.” ",
        "reference": "en-NRSV-27508",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "38",
        "text": "The police reported these words to the magistrates, and they were afraid when they heard that they were Roman citizens; ",
        "reference": "en-NRSV-27509",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "39",
        "text": "so they came and apologized to them. And they took them out and asked them to leave the city. ",
        "reference": "en-NRSV-27510",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "16",
        "verse": "40",
        "text": "After leaving the prison they went to Lydia’s home; and when they had seen and encouraged the brothers and sisters there, they departed.",
        "reference": "en-NRSV-27511",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "1",
        "text": "After Paul and Silas had passed through Amphipolis and Apollonia, they came to Thessalonica, where there was a synagogue of the Jews. ",
        "headerReference": "en-NRSV-27512",
        "title": "\nThe Uproar in Thessalonica\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "2",
        "text": "And Paul went in, as was his custom, and on three sabbath days argued with them from the scriptures, ",
        "reference": "en-NRSV-27513",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "3",
        "text": "explaining and proving that it was necessary for the Messiah to suffer and to rise from the dead, and saying, “This is the Messiah, Jesus whom I am proclaiming to you.” ",
        "reference": "en-NRSV-27514",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "4",
        "text": "Some of them were persuaded and joined Paul and Silas, as did a great many of the devout Greeks and not a few of the leading women. ",
        "reference": "en-NRSV-27515",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "5",
        "text": "But the Jews became jealous, and with the help of some ruffians in the marketplaces they formed a mob and set the city in an uproar. While they were searching for Paul and Silas to bring them out to the assembly, they attacked Jason’s house. ",
        "reference": "en-NRSV-27516",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "6",
        "text": "When they could not find them, they dragged Jason and some believers before the city authorities, shouting, “These people who have been turning the world upside down have come here also, ",
        "reference": "en-NRSV-27517",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "7",
        "text": "and Jason has entertained them as guests. They are all acting contrary to the decrees of the emperor, saying that there is another king named Jesus.” ",
        "reference": "en-NRSV-27518",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "8",
        "text": "The people and the city officials were disturbed when they heard this, ",
        "reference": "en-NRSV-27519",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "9",
        "text": "and after they had taken bail from Jason and the others, they let them go.",
        "reference": "en-NRSV-27520",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "10",
        "text": "\nThat very night the believers sent Paul and Silas off to Beroea; and when they arrived, they went to the Jewish synagogue. \n",
        "headerReference": "en-NRSV-27521",
        "title": "\nPaul and Silas in Beroea\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "11",
        "text": "These Jews were more receptive than those in Thessalonica, for they welcomed the message very eagerly and examined the scriptures every day to see whether these things were so. ",
        "reference": "en-NRSV-27522",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "12",
        "text": "Many of them therefore believed, including not a few Greek women and men of high standing. ",
        "reference": "en-NRSV-27523",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "13",
        "text": "But when the Jews of Thessalonica learned that the word of God had been proclaimed by Paul in Beroea as well, they came there too, to stir up and incite the crowds. ",
        "reference": "en-NRSV-27524",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "14",
        "text": "Then the believers immediately sent Paul away to the coast, but Silas and Timothy remained behind. ",
        "reference": "en-NRSV-27525",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "15",
        "text": "Those who conducted Paul brought him as far as Athens; and after receiving instructions to have Silas and Timothy join him as soon as possible, they left him.",
        "reference": "en-NRSV-27526",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "16",
        "text": "\nWhile Paul was waiting for them in Athens, he was deeply distressed to see that the city was full of idols. \n",
        "headerReference": "en-NRSV-27527",
        "title": "\nPaul in Athens\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "17",
        "text": "So he argued in the synagogue with the Jews and the devout persons, and also in the marketplace every day with those who happened to be there. ",
        "reference": "en-NRSV-27528",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "18",
        "text": "Also some Epicurean and Stoic philosophers debated with him. Some said, “What does this babbler want to say?” Others said, “He seems to be a proclaimer of foreign divinities.” (This was because he was telling the good news about Jesus and the resurrection.) ",
        "reference": "en-NRSV-27529",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "19",
        "text": "So they took him and brought him to the Areopagus and asked him, “May we know what this new teaching is that you are presenting? ",
        "reference": "en-NRSV-27530",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "20",
        "text": "It sounds rather strange to us, so we would like to know what it means.” ",
        "reference": "en-NRSV-27531",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "21",
        "text": "Now all the Athenians and the foreigners living there would spend their time in nothing but telling or hearing something new.",
        "reference": "en-NRSV-27532",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "22",
        "text": "Then Paul stood in front of the Areopagus and said, “Athenians, I see how extremely religious you are in every way. ",
        "reference": "en-NRSV-27533",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "23",
        "text": "For as I went through the city and looked carefully at the objects of your worship, I found among them an altar with the inscription, ‘To an unknown god.’ What therefore you worship as unknown, this I proclaim to you. ",
        "reference": "en-NRSV-27534",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "24",
        "text": "The God who made the world and everything in it, he who is Lord of heaven and earth, does not live in shrines made by human hands, ",
        "reference": "en-NRSV-27535",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "25",
        "text": "nor is he served by human hands, as though he needed anything, since he himself gives to all mortals life and breath and all things. ",
        "reference": "en-NRSV-27536",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "26",
        "text": "From one ancestor he made all nations to inhabit the whole earth, and he allotted the times of their existence and the boundaries of the places where they would live, ",
        "reference": "en-NRSV-27537",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "27",
        "text": "so that they would search for God and perhaps grope for him and find him—though indeed he is not far from each one of us. ",
        "reference": "en-NRSV-27538",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "28",
        "text": "For ‘In him we live and move and have our being’; as even some of your own poets have said, \n‘For we too are his offspring.’\n",
        "reference": "en-NRSV-27539",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "29",
        "text": "Since we are God’s offspring, we ought not to think that the deity is like gold, or silver, or stone, an image formed by the art and imagination of mortals. ",
        "reference": "en-NRSV-27540",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "30",
        "text": "While God has overlooked the times of human ignorance, now he commands all people everywhere to repent, ",
        "reference": "en-NRSV-27541",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "31",
        "text": "because he has fixed a day on which he will have the world judged in righteousness by a man whom he has appointed, and of this he has given assurance to all by raising him from the dead.”",
        "reference": "en-NRSV-27542",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "32",
        "text": "When they heard of the resurrection of the dead, some scoffed; but others said, “We will hear you again about this.” ",
        "reference": "en-NRSV-27543",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "33",
        "text": "At that point Paul left them. ",
        "reference": "en-NRSV-27544",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "17",
        "verse": "34",
        "text": "But some of them joined him and became believers, including Dionysius the Areopagite and a woman named Damaris, and others with them.",
        "reference": "en-NRSV-27545",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "1",
        "text": "After this Paul left Athens and went to Corinth. ",
        "headerReference": "en-NRSV-27546",
        "title": "\nPaul in Corinth\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "2",
        "text": "There he found a Jew named Aquila, a native of Pontus, who had recently come from Italy with his wife Priscilla, because Claudius had ordered all Jews to leave Rome. Paul went to see them, ",
        "reference": "en-NRSV-27547",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "3",
        "text": "and, because he was of the same trade, he stayed with them, and they worked together—by trade they were tentmakers. ",
        "reference": "en-NRSV-27548",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "4",
        "text": "Every sabbath he would argue in the synagogue and would try to convince Jews and Greeks.",
        "reference": "en-NRSV-27549",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "5",
        "text": "When Silas and Timothy arrived from Macedonia, Paul was occupied with proclaiming the word, testifying to the Jews that the Messiah was Jesus. ",
        "reference": "en-NRSV-27550",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "6",
        "text": "When they opposed and reviled him, in protest he shook the dust from his clothes and said to them, “Your blood be on your own heads! I am innocent. From now on I will go to the Gentiles.” ",
        "reference": "en-NRSV-27551",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "7",
        "text": "Then he left the synagogue and went to the house of a man named Titius Justus, a worshiper of God; his house was next door to the synagogue. ",
        "reference": "en-NRSV-27552",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "8",
        "text": "Crispus, the official of the synagogue, became a believer in the Lord, together with all his household; and many of the Corinthians who heard Paul became believers and were baptized. ",
        "reference": "en-NRSV-27553",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "9",
        "text": "One night the Lord said to Paul in a vision, “Do not be afraid, but speak and do not be silent; ",
        "reference": "en-NRSV-27554",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "10",
        "text": "for I am with you, and no one will lay a hand on you to harm you, for there are many in this city who are my people.” ",
        "reference": "en-NRSV-27555",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "11",
        "text": "He stayed there a year and six months, teaching the word of God among them.",
        "reference": "en-NRSV-27556",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "12",
        "text": "But when Gallio was proconsul of Achaia, the Jews made a united attack on Paul and brought him before the tribunal. ",
        "reference": "en-NRSV-27557",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "13",
        "text": "They said, “This man is persuading people to worship God in ways that are contrary to the law.” ",
        "reference": "en-NRSV-27558",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "14",
        "text": "Just as Paul was about to speak, Gallio said to the Jews, “If it were a matter of crime or serious villainy, I would be justified in accepting the complaint of you Jews; ",
        "reference": "en-NRSV-27559",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "15",
        "text": "but since it is a matter of questions about words and names and your own law, see to it yourselves; I do not wish to be a judge of these matters.” ",
        "reference": "en-NRSV-27560",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "16",
        "text": "And he dismissed them from the tribunal. ",
        "reference": "en-NRSV-27561",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "17",
        "text": "Then all of them seized Sosthenes, the official of the synagogue, and beat him in front of the tribunal. But Gallio paid no attention to any of these things.",
        "reference": "en-NRSV-27562",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "18",
        "text": "\nAfter staying there for a considerable time, Paul said farewell to the believers and sailed for Syria, accompanied by Priscilla and Aquila. At Cenchreae he had his hair cut, for he was under a vow. \n",
        "headerReference": "en-NRSV-27563",
        "title": "\nPaul’s Return to Antioch\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "19",
        "text": "When they reached Ephesus, he left them there, but first he himself went into the synagogue and had a discussion with the Jews. ",
        "reference": "en-NRSV-27564",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "20",
        "text": "When they asked him to stay longer, he declined; ",
        "reference": "en-NRSV-27565",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "21",
        "text": "but on taking leave of them, he said, “I will return to you, if God wills.” Then he set sail from Ephesus.",
        "reference": "en-NRSV-27566",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "22",
        "text": "When he had landed at Caesarea, he went up to Jerusalem and greeted the church, and then went down to Antioch. ",
        "reference": "en-NRSV-27567",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "23",
        "text": "After spending some time there he departed and went from place to place through the region of Galatia and Phrygia, strengthening all the disciples.",
        "reference": "en-NRSV-27568",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "24",
        "text": "\nNow there came to Ephesus a Jew named Apollos, a native of Alexandria. He was an eloquent man, well-versed in the scriptures. \n",
        "headerReference": "en-NRSV-27569",
        "title": "\nMinistry of Apollos\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "25",
        "text": "He had been instructed in the Way of the Lord; and he spoke with burning enthusiasm and taught accurately the things concerning Jesus, though he knew only the baptism of John. ",
        "reference": "en-NRSV-27570",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "26",
        "text": "He began to speak boldly in the synagogue; but when Priscilla and Aquila heard him, they took him aside and explained the Way of God to him more accurately. ",
        "reference": "en-NRSV-27571",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "27",
        "text": "And when he wished to cross over to Achaia, the believers encouraged him and wrote to the disciples to welcome him. On his arrival he greatly helped those who through grace had become believers, ",
        "reference": "en-NRSV-27572",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "18",
        "verse": "28",
        "text": "for he powerfully refuted the Jews in public, showing by the scriptures that the Messiah is Jesus.",
        "reference": "en-NRSV-27573",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "1",
        "text": "While Apollos was in Corinth, Paul passed through the interior regions and came to Ephesus, where he found some disciples. ",
        "headerReference": "en-NRSV-27574",
        "title": "\nPaul in Ephesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "2",
        "text": "He said to them, “Did you receive the Holy Spirit when you became believers?” They replied, “No, we have not even heard that there is a Holy Spirit.” ",
        "reference": "en-NRSV-27575",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "3",
        "text": "Then he said, “Into what then were you baptized?” They answered, “Into John’s baptism.” ",
        "reference": "en-NRSV-27576",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "4",
        "text": "Paul said, “John baptized with the baptism of repentance, telling the people to believe in the one who was to come after him, that is, in Jesus.” ",
        "reference": "en-NRSV-27577",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "5",
        "text": "On hearing this, they were baptized in the name of the Lord Jesus. ",
        "reference": "en-NRSV-27578",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "6",
        "text": "When Paul had laid his hands on them, the Holy Spirit came upon them, and they spoke in tongues and prophesied— ",
        "reference": "en-NRSV-27579",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "7",
        "text": "altogether there were about twelve of them.",
        "reference": "en-NRSV-27580",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "8",
        "text": "He entered the synagogue and for three months spoke out boldly, and argued persuasively about the kingdom of God. ",
        "reference": "en-NRSV-27581",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "9",
        "text": "When some stubbornly refused to believe and spoke evil of the Way before the congregation, he left them, taking the disciples with him, and argued daily in the lecture hall of Tyrannus. ",
        "reference": "en-NRSV-27582",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "10",
        "text": "This continued for two years, so that all the residents of Asia, both Jews and Greeks, heard the word of the Lord.",
        "reference": "en-NRSV-27583",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "11",
        "text": "\nGod did extraordinary miracles through Paul, \n",
        "headerReference": "en-NRSV-27584",
        "title": "\nThe Sons of Sceva\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "12",
        "text": "so that when the handkerchiefs or aprons that had touched his skin were brought to the sick, their diseases left them, and the evil spirits came out of them. ",
        "reference": "en-NRSV-27585",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "13",
        "text": "Then some itinerant Jewish exorcists tried to use the name of the Lord Jesus over those who had evil spirits, saying, “I adjure you by the Jesus whom Paul proclaims.” ",
        "reference": "en-NRSV-27586",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "14",
        "text": "Seven sons of a Jewish high priest named Sceva were doing this. ",
        "reference": "en-NRSV-27587",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "15",
        "text": "But the evil spirit said to them in reply, “Jesus I know, and Paul I know; but who are you?” ",
        "reference": "en-NRSV-27588",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "16",
        "text": "Then the man with the evil spirit leaped on them, mastered them all, and so overpowered them that they fled out of the house naked and wounded. ",
        "reference": "en-NRSV-27589",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "17",
        "text": "When this became known to all residents of Ephesus, both Jews and Greeks, everyone was awestruck; and the name of the Lord Jesus was praised. ",
        "reference": "en-NRSV-27590",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "18",
        "text": "Also many of those who became believers confessed and disclosed their practices. ",
        "reference": "en-NRSV-27591",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "19",
        "text": "A number of those who practiced magic collected their books and burned them publicly; when the value of these books was calculated, it was found to come to fifty thousand silver coins. ",
        "reference": "en-NRSV-27592",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "20",
        "text": "So the word of the Lord grew mightily and prevailed.",
        "reference": "en-NRSV-27593",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "21",
        "text": "\nNow after these things had been accomplished, Paul resolved in the Spirit to go through Macedonia and Achaia, and then to go on to Jerusalem. He said, “After I have gone there, I must also see Rome.” \n",
        "headerReference": "en-NRSV-27594",
        "title": "\nThe Riot in Ephesus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "22",
        "text": "So he sent two of his helpers, Timothy and Erastus, to Macedonia, while he himself stayed for some time longer in Asia.",
        "reference": "en-NRSV-27595",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "23",
        "text": "About that time no little disturbance broke out concerning the Way. ",
        "reference": "en-NRSV-27596",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "24",
        "text": "A man named Demetrius, a silversmith who made silver shrines of Artemis, brought no little business to the artisans. ",
        "reference": "en-NRSV-27597",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "25",
        "text": "These he gathered together, with the workers of the same trade, and said, “Men, you know that we get our wealth from this business. ",
        "reference": "en-NRSV-27598",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "26",
        "text": "You also see and hear that not only in Ephesus but in almost the whole of Asia this Paul has persuaded and drawn away a considerable number of people by saying that gods made with hands are not gods. ",
        "reference": "en-NRSV-27599",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "27",
        "text": "And there is danger not only that this trade of ours may come into disrepute but also that the temple of the great goddess Artemis will be scorned, and she will be deprived of her majesty that brought all Asia and the world to worship her.”",
        "reference": "en-NRSV-27600",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "28",
        "text": "When they heard this, they were enraged and shouted, “Great is Artemis of the Ephesians!” ",
        "reference": "en-NRSV-27601",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "29",
        "text": "The city was filled with the confusion; and people rushed together to the theater, dragging with them Gaius and Aristarchus, Macedonians who were Paul’s travel companions. ",
        "reference": "en-NRSV-27602",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "30",
        "text": "Paul wished to go into the crowd, but the disciples would not let him; ",
        "reference": "en-NRSV-27603",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "31",
        "text": "even some officials of the province of Asia, who were friendly to him, sent him a message urging him not to venture into the theater. ",
        "reference": "en-NRSV-27604",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "32",
        "text": "Meanwhile, some were shouting one thing, some another; for the assembly was in confusion, and most of them did not know why they had come together. ",
        "reference": "en-NRSV-27605",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "33",
        "text": "Some of the crowd gave instructions to Alexander, whom the Jews had pushed forward. And Alexander motioned for silence and tried to make a defense before the people. ",
        "reference": "en-NRSV-27606",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "34",
        "text": "But when they recognized that he was a Jew, for about two hours all of them shouted in unison, “Great is Artemis of the Ephesians!” ",
        "reference": "en-NRSV-27607",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "35",
        "text": "But when the town clerk had quieted the crowd, he said, “Citizens of Ephesus, who is there that does not know that the city of the Ephesians is the temple keeper of the great Artemis and of the statue that fell from heaven? ",
        "reference": "en-NRSV-27608",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "36",
        "text": "Since these things cannot be denied, you ought to be quiet and do nothing rash. ",
        "reference": "en-NRSV-27609",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "37",
        "text": "You have brought these men here who are neither temple robbers nor blasphemers of our goddess. ",
        "reference": "en-NRSV-27610",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "38",
        "text": "If therefore Demetrius and the artisans with him have a complaint against anyone, the courts are open, and there are proconsuls; let them bring charges there against one another. ",
        "reference": "en-NRSV-27611",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "39",
        "text": "If there is anything further you want to know, it must be settled in the regular assembly. ",
        "reference": "en-NRSV-27612",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "40",
        "text": "For we are in danger of being charged with rioting today, since there is no cause that we can give to justify this commotion.” ",
        "reference": "en-NRSV-27613",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "19",
        "verse": "41",
        "text": "When he had said this, he dismissed the assembly.",
        "reference": "en-NRSV-27614",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "1",
        "text": "After the uproar had ceased, Paul sent for the disciples; and after encouraging them and saying farewell, he left for Macedonia. ",
        "headerReference": "en-NRSV-27615",
        "title": "\nPaul Goes to Macedonia and Greece\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "2",
        "text": "When he had gone through those regions and had given the believers much encouragement, he came to Greece, ",
        "reference": "en-NRSV-27616",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "3",
        "text": "where he stayed for three months. He was about to set sail for Syria when a plot was made against him by the Jews, and so he decided to return through Macedonia. ",
        "reference": "en-NRSV-27617",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "4",
        "text": "He was accompanied by Sopater son of Pyrrhus from Beroea, by Aristarchus and Secundus from Thessalonica, by Gaius from Derbe, and by Timothy, as well as by Tychicus and Trophimus from Asia. ",
        "reference": "en-NRSV-27618",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "5",
        "text": "They went ahead and were waiting for us in Troas; ",
        "reference": "en-NRSV-27619",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "6",
        "text": "but we sailed from Philippi after the days of Unleavened Bread, and in five days we joined them in Troas, where we stayed for seven days.",
        "reference": "en-NRSV-27620",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "7",
        "text": "\nOn the first day of the week, when we met to break bread, Paul was holding a discussion with them; since he intended to leave the next day, he continued speaking until midnight. \n",
        "headerReference": "en-NRSV-27621",
        "title": "\nPaul’s Farewell Visit to Troas\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "8",
        "text": "There were many lamps in the room upstairs where we were meeting. ",
        "reference": "en-NRSV-27622",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "9",
        "text": "A young man named Eutychus, who was sitting in the window, began to sink off into a deep sleep while Paul talked still longer. Overcome by sleep, he fell to the ground three floors below and was picked up dead. ",
        "reference": "en-NRSV-27623",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "10",
        "text": "But Paul went down, and bending over him took him in his arms, and said, “Do not be alarmed, for his life is in him.” ",
        "reference": "en-NRSV-27624",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "11",
        "text": "Then Paul went upstairs, and after he had broken bread and eaten, he continued to converse with them until dawn; then he left. ",
        "reference": "en-NRSV-27625",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "12",
        "text": "Meanwhile they had taken the boy away alive and were not a little comforted.",
        "reference": "en-NRSV-27626",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "13",
        "text": "\nWe went ahead to the ship and set sail for Assos, intending to take Paul on board there; for he had made this arrangement, intending to go by land himself. \n",
        "headerReference": "en-NRSV-27627",
        "title": "\nThe Voyage from Troas to Miletus\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "14",
        "text": "When he met us in Assos, we took him on board and went to Mitylene. ",
        "reference": "en-NRSV-27628",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "15",
        "text": "We sailed from there, and on the following day we arrived opposite Chios. The next day we touched at Samos, and the day after that we came to Miletus. ",
        "reference": "en-NRSV-27629",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "16",
        "text": "For Paul had decided to sail past Ephesus, so that he might not have to spend time in Asia; he was eager to be in Jerusalem, if possible, on the day of Pentecost.",
        "reference": "en-NRSV-27630",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "17",
        "text": "\nFrom Miletus he sent a message to Ephesus, asking the elders of the church to meet him. \n",
        "headerReference": "en-NRSV-27631",
        "title": "\nPaul Speaks to the Ephesian Elders\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "18",
        "text": "When they came to him, he said to them: \n“You yourselves know how I lived among you the entire time from the first day that I set foot in Asia, \n",
        "reference": "en-NRSV-27632",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "19",
        "text": "serving the Lord with all humility and with tears, enduring the trials that came to me through the plots of the Jews. ",
        "reference": "en-NRSV-27633",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "20",
        "text": "I did not shrink from doing anything helpful, proclaiming the message to you and teaching you publicly and from house to house, ",
        "reference": "en-NRSV-27634",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "21",
        "text": "as I testified to both Jews and Greeks about repentance toward God and faith toward our Lord Jesus. ",
        "reference": "en-NRSV-27635",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "22",
        "text": "And now, as a captive to the Spirit, I am on my way to Jerusalem, not knowing what will happen to me there, ",
        "reference": "en-NRSV-27636",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "23",
        "text": "except that the Holy Spirit testifies to me in every city that imprisonment and persecutions are waiting for me. ",
        "reference": "en-NRSV-27637",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "24",
        "text": "But I do not count my life of any value to myself, if only I may finish my course and the ministry that I received from the Lord Jesus, to testify to the good news of God’s grace.",
        "reference": "en-NRSV-27638",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "25",
        "text": "“And now I know that none of you, among whom I have gone about proclaiming the kingdom, will ever see my face again. ",
        "reference": "en-NRSV-27639",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "26",
        "text": "Therefore I declare to you this day that I am not responsible for the blood of any of you, ",
        "reference": "en-NRSV-27640",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "27",
        "text": "for I did not shrink from declaring to you the whole purpose of God. ",
        "reference": "en-NRSV-27641",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "28",
        "text": "Keep watch over yourselves and over all the flock, of which the Holy Spirit has made you overseers, to shepherd the church of God that he obtained with the blood of his own Son. ",
        "reference": "en-NRSV-27642",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "29",
        "text": "I know that after I have gone, savage wolves will come in among you, not sparing the flock. ",
        "reference": "en-NRSV-27643",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "30",
        "text": "Some even from your own group will come distorting the truth in order to entice the disciples to follow them. ",
        "reference": "en-NRSV-27644",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "31",
        "text": "Therefore be alert, remembering that for three years I did not cease night or day to warn everyone with tears. ",
        "reference": "en-NRSV-27645",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "32",
        "text": "And now I commend you to God and to the message of his grace, a message that is able to build you up and to give you the inheritance among all who are sanctified. ",
        "reference": "en-NRSV-27646",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "33",
        "text": "I coveted no one’s silver or gold or clothing. ",
        "reference": "en-NRSV-27647",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "34",
        "text": "You know for yourselves that I worked with my own hands to support myself and my companions. ",
        "reference": "en-NRSV-27648",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "35",
        "text": "In all this I have given you an example that by such work we must support the weak, remembering the words of the Lord Jesus, for he himself said, ‘It is more blessed to give than to receive.’”",
        "reference": "en-NRSV-27649",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "36",
        "text": "When he had finished speaking, he knelt down with them all and prayed. ",
        "reference": "en-NRSV-27650",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "37",
        "text": "There was much weeping among them all; they embraced Paul and kissed him, ",
        "reference": "en-NRSV-27651",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "20",
        "verse": "38",
        "text": "grieving especially because of what he had said, that they would not see him again. Then they brought him to the ship.",
        "reference": "en-NRSV-27652",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "1",
        "text": "When we had parted from them and set sail, we came by a straight course to Cos, and the next day to Rhodes, and from there to Patara. ",
        "headerReference": "en-NRSV-27653",
        "title": "\nPaul’s Journey to Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "2",
        "text": "When we found a ship bound for Phoenicia, we went on board and set sail. ",
        "reference": "en-NRSV-27654",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "3",
        "text": "We came in sight of Cyprus; and leaving it on our left, we sailed to Syria and landed at Tyre, because the ship was to unload its cargo there. ",
        "reference": "en-NRSV-27655",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "4",
        "text": "We looked up the disciples and stayed there for seven days. Through the Spirit they told Paul not to go on to Jerusalem. ",
        "reference": "en-NRSV-27656",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "5",
        "text": "When our days there were ended, we left and proceeded on our journey; and all of them, with wives and children, escorted us outside the city. There we knelt down on the beach and prayed ",
        "reference": "en-NRSV-27657",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "6",
        "text": "and said farewell to one another. Then we went on board the ship, and they returned home.",
        "reference": "en-NRSV-27658",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "7",
        "text": "When we had finished the voyage from Tyre, we arrived at Ptolemais; and we greeted the believers and stayed with them for one day. ",
        "reference": "en-NRSV-27659",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "8",
        "text": "The next day we left and came to Caesarea; and we went into the house of Philip the evangelist, one of the seven, and stayed with him. ",
        "reference": "en-NRSV-27660",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "9",
        "text": "He had four unmarried daughters who had the gift of prophecy. ",
        "reference": "en-NRSV-27661",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "10",
        "text": "While we were staying there for several days, a prophet named Agabus came down from Judea. ",
        "reference": "en-NRSV-27662",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "11",
        "text": "He came to us and took Paul’s belt, bound his own feet and hands with it, and said, “Thus says the Holy Spirit, ‘This is the way the Jews in Jerusalem will bind the man who owns this belt and will hand him over to the Gentiles.’” ",
        "reference": "en-NRSV-27663",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "12",
        "text": "When we heard this, we and the people there urged him not to go up to Jerusalem. ",
        "reference": "en-NRSV-27664",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "13",
        "text": "Then Paul answered, “What are you doing, weeping and breaking my heart? For I am ready not only to be bound but even to die in Jerusalem for the name of the Lord Jesus.” ",
        "reference": "en-NRSV-27665",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "14",
        "text": "Since he would not be persuaded, we remained silent except to say, “The Lord’s will be done.”",
        "reference": "en-NRSV-27666",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "15",
        "text": "After these days we got ready and started to go up to Jerusalem. ",
        "reference": "en-NRSV-27667",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "16",
        "text": "Some of the disciples from Caesarea also came along and brought us to the house of Mnason of Cyprus, an early disciple, with whom we were to stay.",
        "reference": "en-NRSV-27668",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "17",
        "text": "\nWhen we arrived in Jerusalem, the brothers welcomed us warmly. \n",
        "headerReference": "en-NRSV-27669",
        "title": "\nPaul Visits James at Jerusalem\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "18",
        "text": "The next day Paul went with us to visit James; and all the elders were present. ",
        "reference": "en-NRSV-27670",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "19",
        "text": "After greeting them, he related one by one the things that God had done among the Gentiles through his ministry. ",
        "reference": "en-NRSV-27671",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "20",
        "text": "When they heard it, they praised God. Then they said to him, “You see, brother, how many thousands of believers there are among the Jews, and they are all zealous for the law. ",
        "reference": "en-NRSV-27672",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "21",
        "text": "They have been told about you that you teach all the Jews living among the Gentiles to forsake Moses, and that you tell them not to circumcise their children or observe the customs. ",
        "reference": "en-NRSV-27673",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "22",
        "text": "What then is to be done? They will certainly hear that you have come. ",
        "reference": "en-NRSV-27674",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "23",
        "text": "So do what we tell you. We have four men who are under a vow. ",
        "reference": "en-NRSV-27675",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "24",
        "text": "Join these men, go through the rite of purification with them, and pay for the shaving of their heads. Thus all will know that there is nothing in what they have been told about you, but that you yourself observe and guard the law. ",
        "reference": "en-NRSV-27676",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "25",
        "text": "But as for the Gentiles who have become believers, we have sent a letter with our judgment that they should abstain from what has been sacrificed to idols and from blood and from what is strangled and from fornication.” ",
        "reference": "en-NRSV-27677",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "26",
        "text": "Then Paul took the men, and the next day, having purified himself, he entered the temple with them, making public the completion of the days of purification when the sacrifice would be made for each of them.",
        "reference": "en-NRSV-27678",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "27",
        "text": "\nWhen the seven days were almost completed, the Jews from Asia, who had seen him in the temple, stirred up the whole crowd. They seized him, \n",
        "headerReference": "en-NRSV-27679",
        "title": "\nPaul Arrested in the Temple\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "28",
        "text": "shouting, “Fellow Israelites, help! This is the man who is teaching everyone everywhere against our people, our law, and this place; more than that, he has actually brought Greeks into the temple and has defiled this holy place.” ",
        "reference": "en-NRSV-27680",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "29",
        "text": "For they had previously seen Trophimus the Ephesian with him in the city, and they supposed that Paul had brought him into the temple. ",
        "reference": "en-NRSV-27681",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "30",
        "text": "Then all the city was aroused, and the people rushed together. They seized Paul and dragged him out of the temple, and immediately the doors were shut. ",
        "reference": "en-NRSV-27682",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "31",
        "text": "While they were trying to kill him, word came to the tribune of the cohort that all Jerusalem was in an uproar. ",
        "reference": "en-NRSV-27683",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "32",
        "text": "Immediately he took soldiers and centurions and ran down to them. When they saw the tribune and the soldiers, they stopped beating Paul. ",
        "reference": "en-NRSV-27684",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "33",
        "text": "Then the tribune came, arrested him, and ordered him to be bound with two chains; he inquired who he was and what he had done. ",
        "reference": "en-NRSV-27685",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "34",
        "text": "Some in the crowd shouted one thing, some another; and as he could not learn the facts because of the uproar, he ordered him to be brought into the barracks. ",
        "reference": "en-NRSV-27686",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "35",
        "text": "When Paul came to the steps, the violence of the mob was so great that he had to be carried by the soldiers. ",
        "reference": "en-NRSV-27687",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "36",
        "text": "The crowd that followed kept shouting, “Away with him!”",
        "reference": "en-NRSV-27688",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "37",
        "text": "\nJust as Paul was about to be brought into the barracks, he said to the tribune, “May I say something to you?” The tribune replied, “Do you know Greek? \n",
        "headerReference": "en-NRSV-27689",
        "title": "\nPaul Defends Himself\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "38",
        "text": "Then you are not the Egyptian who recently stirred up a revolt and led the four thousand assassins out into the wilderness?” ",
        "reference": "en-NRSV-27690",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "39",
        "text": "Paul replied, “I am a Jew, from Tarsus in Cilicia, a citizen of an important city; I beg you, let me speak to the people.” ",
        "reference": "en-NRSV-27691",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "21",
        "verse": "40",
        "text": "When he had given him permission, Paul stood on the steps and motioned to the people for silence; and when there was a great hush, he addressed them in the Hebrew language, saying:",
        "reference": "en-NRSV-27692",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "2",
        "text": "When they heard him addressing them in Hebrew, they became even more quiet. Then he said:",
        "reference": "en-NRSV-27694",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "3",
        "text": "“I am a Jew, born in Tarsus in Cilicia, but brought up in this city at the feet of Gamaliel, educated strictly according to our ancestral law, being zealous for God, just as all of you are today. ",
        "reference": "en-NRSV-27695",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "4",
        "text": "I persecuted this Way up to the point of death by binding both men and women and putting them in prison, ",
        "reference": "en-NRSV-27696",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "5",
        "text": "as the high priest and the whole council of elders can testify about me. From them I also received letters to the brothers in Damascus, and I went there in order to bind those who were there and to bring them back to Jerusalem for punishment.",
        "reference": "en-NRSV-27697",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "6",
        "text": "\n“While I was on my way and approaching Damascus, about noon a great light from heaven suddenly shone about me. \n",
        "headerReference": "en-NRSV-27698",
        "title": "\nPaul Tells of His Conversion\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "7",
        "text": "I fell to the ground and heard a voice saying to me, ‘Saul, Saul, why are you persecuting me?’ ",
        "reference": "en-NRSV-27699",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "8",
        "text": "I answered, ‘Who are you, Lord?’ Then he said to me, ‘I am Jesus of Nazareth whom you are persecuting.’ ",
        "reference": "en-NRSV-27700",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "9",
        "text": "Now those who were with me saw the light but did not hear the voice of the one who was speaking to me. ",
        "reference": "en-NRSV-27701",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "10",
        "text": "I asked, ‘What am I to do, Lord?’ The Lord said to me, ‘Get up and go to Damascus; there you will be told everything that has been assigned to you to do.’ ",
        "reference": "en-NRSV-27702",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "11",
        "text": "Since I could not see because of the brightness of that light, those who were with me took my hand and led me to Damascus.",
        "reference": "en-NRSV-27703",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "12",
        "text": "“A certain Ananias, who was a devout man according to the law and well spoken of by all the Jews living there, ",
        "reference": "en-NRSV-27704",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "13",
        "text": "came to me; and standing beside me, he said, ‘Brother Saul, regain your sight!’ In that very hour I regained my sight and saw him. ",
        "reference": "en-NRSV-27705",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "14",
        "text": "Then he said, ‘The God of our ancestors has chosen you to know his will, to see the Righteous One and to hear his own voice; ",
        "reference": "en-NRSV-27706",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "15",
        "text": "for you will be his witness to all the world of what you have seen and heard. ",
        "reference": "en-NRSV-27707",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "16",
        "text": "And now why do you delay? Get up, be baptized, and have your sins washed away, calling on his name.’",
        "reference": "en-NRSV-27708",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "17",
        "text": "\n“After I had returned to Jerusalem and while I was praying in the temple, I fell into a trance \n",
        "headerReference": "en-NRSV-27709",
        "title": "\nPaul Sent to the Gentiles\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "18",
        "text": "and saw Jesus saying to me, ‘Hurry and get out of Jerusalem quickly, because they will not accept your testimony about me.’ ",
        "reference": "en-NRSV-27710",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "19",
        "text": "And I said, ‘Lord, they themselves know that in every synagogue I imprisoned and beat those who believed in you. ",
        "reference": "en-NRSV-27711",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "20",
        "text": "And while the blood of your witness Stephen was shed, I myself was standing by, approving and keeping the coats of those who killed him.’ ",
        "reference": "en-NRSV-27712",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "21",
        "text": "Then he said to me, ‘Go, for I will send you far away to the Gentiles.’”",
        "reference": "en-NRSV-27713",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "22",
        "text": "\nUp to this point they listened to him, but then they shouted, “Away with such a fellow from the earth! For he should not be allowed to live.” \n",
        "headerReference": "en-NRSV-27714",
        "title": "\nPaul and the Roman Tribune\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "23",
        "text": "And while they were shouting, throwing off their cloaks, and tossing dust into the air, ",
        "reference": "en-NRSV-27715",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "24",
        "text": "the tribune directed that he was to be brought into the barracks, and ordered him to be examined by flogging, to find out the reason for this outcry against him. ",
        "reference": "en-NRSV-27716",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "25",
        "text": "But when they had tied him up with thongs, Paul said to the centurion who was standing by, “Is it legal for you to flog a Roman citizen who is uncondemned?” ",
        "reference": "en-NRSV-27717",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "26",
        "text": "When the centurion heard that, he went to the tribune and said to him, “What are you about to do? This man is a Roman citizen.” ",
        "reference": "en-NRSV-27718",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "27",
        "text": "The tribune came and asked Paul, “Tell me, are you a Roman citizen?” And he said, “Yes.” ",
        "reference": "en-NRSV-27719",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "28",
        "text": "The tribune answered, “It cost me a large sum of money to get my citizenship.” Paul said, “But I was born a citizen.” ",
        "reference": "en-NRSV-27720",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "29",
        "text": "Immediately those who were about to examine him drew back from him; and the tribune also was afraid, for he realized that Paul was a Roman citizen and that he had bound him.",
        "reference": "en-NRSV-27721",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "22",
        "verse": "30",
        "text": "\nSince he wanted to find out what Paul was being accused of by the Jews, the next day he released him and ordered the chief priests and the entire council to meet. He brought Paul down and had him stand before them.\n",
        "headerReference": "en-NRSV-27722",
        "title": "\nPaul before the Council\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "2",
        "text": "Then the high priest Ananias ordered those standing near him to strike him on the mouth. ",
        "reference": "en-NRSV-27724",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "3",
        "text": "At this Paul said to him, “God will strike you, you whitewashed wall! Are you sitting there to judge me according to the law, and yet in violation of the law you order me to be struck?” ",
        "reference": "en-NRSV-27725",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "4",
        "text": "Those standing nearby said, “Do you dare to insult God’s high priest?” ",
        "reference": "en-NRSV-27726",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "5",
        "text": "And Paul said, “I did not realize, brothers, that he was high priest; for it is written, ‘You shall not speak evil of a leader of your people.’”",
        "reference": "en-NRSV-27727",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "6",
        "text": "When Paul noticed that some were Sadducees and others were Pharisees, he called out in the council, “Brothers, I am a Pharisee, a son of Pharisees. I am on trial concerning the hope of the resurrection of the dead.” ",
        "reference": "en-NRSV-27728",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "7",
        "text": "When he said this, a dissension began between the Pharisees and the Sadducees, and the assembly was divided. ",
        "reference": "en-NRSV-27729",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "8",
        "text": "(The Sadducees say that there is no resurrection, or angel, or spirit; but the Pharisees acknowledge all three.) ",
        "reference": "en-NRSV-27730",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "9",
        "text": "Then a great clamor arose, and certain scribes of the Pharisees’ group stood up and contended, “We find nothing wrong with this man. What if a spirit or an angel has spoken to him?” ",
        "reference": "en-NRSV-27731",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "10",
        "text": "When the dissension became violent, the tribune, fearing that they would tear Paul to pieces, ordered the soldiers to go down, take him by force, and bring him into the barracks.",
        "reference": "en-NRSV-27732",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "11",
        "text": "That night the Lord stood near him and said, “Keep up your courage! For just as you have testified for me in Jerusalem, so you must bear witness also in Rome.”",
        "reference": "en-NRSV-27733",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "12",
        "text": "\nIn the morning the Jews joined in a conspiracy and bound themselves by an oath neither to eat nor drink until they had killed Paul. \n",
        "headerReference": "en-NRSV-27734",
        "title": "\nThe Plot to Kill Paul\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "13",
        "text": "There were more than forty who joined in this conspiracy. ",
        "reference": "en-NRSV-27735",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "14",
        "text": "They went to the chief priests and elders and said, “We have strictly bound ourselves by an oath to taste no food until we have killed Paul. ",
        "reference": "en-NRSV-27736",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "15",
        "text": "Now then, you and the council must notify the tribune to bring him down to you, on the pretext that you want to make a more thorough examination of his case. And we are ready to do away with him before he arrives.”",
        "reference": "en-NRSV-27737",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "16",
        "text": "Now the son of Paul’s sister heard about the ambush; so he went and gained entrance to the barracks and told Paul. ",
        "reference": "en-NRSV-27738",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "17",
        "text": "Paul called one of the centurions and said, “Take this young man to the tribune, for he has something to report to him.” ",
        "reference": "en-NRSV-27739",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "18",
        "text": "So he took him, brought him to the tribune, and said, “The prisoner Paul called me and asked me to bring this young man to you; he has something to tell you.” ",
        "reference": "en-NRSV-27740",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "19",
        "text": "The tribune took him by the hand, drew him aside privately, and asked, “What is it that you have to report to me?” ",
        "reference": "en-NRSV-27741",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "20",
        "text": "He answered, “The Jews have agreed to ask you to bring Paul down to the council tomorrow, as though they were going to inquire more thoroughly into his case. ",
        "reference": "en-NRSV-27742",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "21",
        "text": "But do not be persuaded by them, for more than forty of their men are lying in ambush for him. They have bound themselves by an oath neither to eat nor drink until they kill him. They are ready now and are waiting for your consent.” ",
        "reference": "en-NRSV-27743",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "22",
        "text": "So the tribune dismissed the young man, ordering him, “Tell no one that you have informed me of this.”",
        "reference": "en-NRSV-27744",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "23",
        "text": "\nThen he summoned two of the centurions and said, “Get ready to leave by nine o’clock tonight for Caesarea with two hundred soldiers, seventy horsemen, and two hundred spearmen. \n",
        "headerReference": "en-NRSV-27745",
        "title": "\nPaul Sent to Felix the Governor\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "24",
        "text": "Also provide mounts for Paul to ride, and take him safely to Felix the governor.” ",
        "reference": "en-NRSV-27746",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "25",
        "text": "He wrote a letter to this effect:",
        "reference": "en-NRSV-27747",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "26",
        "text": "“Claudius Lysias to his Excellency the governor Felix, greetings. ",
        "reference": "en-NRSV-27748",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "27",
        "text": "This man was seized by the Jews and was about to be killed by them, but when I had learned that he was a Roman citizen, I came with the guard and rescued him. ",
        "reference": "en-NRSV-27749",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "28",
        "text": "Since I wanted to know the charge for which they accused him, I had him brought to their council. ",
        "reference": "en-NRSV-27750",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "29",
        "text": "I found that he was accused concerning questions of their law, but was charged with nothing deserving death or imprisonment. ",
        "reference": "en-NRSV-27751",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "30",
        "text": "When I was informed that there would be a plot against the man, I sent him to you at once, ordering his accusers also to state before you what they have against him.”",
        "reference": "en-NRSV-27752",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "31",
        "text": "So the soldiers, according to their instructions, took Paul and brought him during the night to Antipatris. ",
        "reference": "en-NRSV-27753",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "32",
        "text": "The next day they let the horsemen go on with him, while they returned to the barracks. ",
        "reference": "en-NRSV-27754",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "33",
        "text": "When they came to Caesarea and delivered the letter to the governor, they presented Paul also before him. ",
        "reference": "en-NRSV-27755",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "34",
        "text": "On reading the letter, he asked what province he belonged to, and when he learned that he was from Cilicia, ",
        "reference": "en-NRSV-27756",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "23",
        "verse": "35",
        "text": "he said, “I will give you a hearing when your accusers arrive.” Then he ordered that he be kept under guard in Herod’s headquarters.",
        "reference": "en-NRSV-27757",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "1",
        "text": "Five days later the high priest Ananias came down with some elders and an attorney, a certain Tertullus, and they reported their case against Paul to the governor. ",
        "headerReference": "en-NRSV-27758",
        "title": "\nPaul before Felix at Caesarea\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "2",
        "text": "When Paul had been summoned, Tertullus began to accuse him, saying: \n“Your Excellency, because of you we have long enjoyed peace, and reforms have been made for this people because of your foresight. \n",
        "reference": "en-NRSV-27759",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "3",
        "text": "We welcome this in every way and everywhere with utmost gratitude. ",
        "reference": "en-NRSV-27760",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "4",
        "text": "But, to detain you no further, I beg you to hear us briefly with your customary graciousness. ",
        "reference": "en-NRSV-27761",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "5",
        "text": "We have, in fact, found this man a pestilent fellow, an agitator among all the Jews throughout the world, and a ringleader of the sect of the Nazarenes. ",
        "reference": "en-NRSV-27762",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "6",
        "text": "He even tried to profane the temple, and so we seized him. ",
        "reference": "en-NRSV-27763",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "8",
        "text": "By examining him yourself you will be able to learn from him concerning everything of which we accuse him.”",
        "reference": "en-NRSV-27764",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "9",
        "text": "The Jews also joined in the charge by asserting that all this was true.",
        "reference": "en-NRSV-27765",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "10",
        "text": "\nWhen the governor motioned to him to speak, Paul replied:\n \n“I cheerfully make my defense, knowing that for many years you have been a judge over this nation. \n",
        "headerReference": "en-NRSV-27766",
        "title": "\nPaul’s Defense before Felix\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "11",
        "text": "As you can find out, it is not more than twelve days since I went up to worship in Jerusalem. ",
        "reference": "en-NRSV-27767",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "12",
        "text": "They did not find me disputing with anyone in the temple or stirring up a crowd either in the synagogues or throughout the city. ",
        "reference": "en-NRSV-27768",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "13",
        "text": "Neither can they prove to you the charge that they now bring against me. ",
        "reference": "en-NRSV-27769",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "14",
        "text": "But this I admit to you, that according to the Way, which they call a sect, I worship the God of our ancestors, believing everything laid down according to the law or written in the prophets. ",
        "reference": "en-NRSV-27770",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "15",
        "text": "I have a hope in God—a hope that they themselves also accept—that there will be a resurrection of both the righteous and the unrighteous. ",
        "reference": "en-NRSV-27771",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "16",
        "text": "Therefore I do my best always to have a clear conscience toward God and all people. ",
        "reference": "en-NRSV-27772",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "17",
        "text": "Now after some years I came to bring alms to my nation and to offer sacrifices. ",
        "reference": "en-NRSV-27773",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "18",
        "text": "While I was doing this, they found me in the temple, completing the rite of purification, without any crowd or disturbance. ",
        "reference": "en-NRSV-27774",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "19",
        "text": "But there were some Jews from Asia—they ought to be here before you to make an accusation, if they have anything against me. ",
        "reference": "en-NRSV-27775",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "20",
        "text": "Or let these men here tell what crime they had found when I stood before the council, ",
        "reference": "en-NRSV-27776",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "21",
        "text": "unless it was this one sentence that I called out while standing before them, ‘It is about the resurrection of the dead that I am on trial before you today.’”",
        "reference": "en-NRSV-27777",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "22",
        "text": "But Felix, who was rather well informed about the Way, adjourned the hearing with the comment, “When Lysias the tribune comes down, I will decide your case.” ",
        "reference": "en-NRSV-27778",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "23",
        "text": "Then he ordered the centurion to keep him in custody, but to let him have some liberty and not to prevent any of his friends from taking care of his needs.",
        "reference": "en-NRSV-27779",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "24",
        "text": "\nSome days later when Felix came with his wife Drusilla, who was Jewish, he sent for Paul and heard him speak concerning faith in Christ Jesus. \n",
        "headerReference": "en-NRSV-27780",
        "title": "\nPaul Held in Custody\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "25",
        "text": "And as he discussed justice, self-control, and the coming judgment, Felix became frightened and said, “Go away for the present; when I have an opportunity, I will send for you.” ",
        "reference": "en-NRSV-27781",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "26",
        "text": "At the same time he hoped that money would be given him by Paul, and for that reason he used to send for him very often and converse with him.",
        "reference": "en-NRSV-27782",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "24",
        "verse": "27",
        "text": "After two years had passed, Felix was succeeded by Porcius Festus; and since he wanted to grant the Jews a favor, Felix left Paul in prison.",
        "reference": "en-NRSV-27783",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "1",
        "text": "Three days after Festus had arrived in the province, he went up from Caesarea to Jerusalem ",
        "headerReference": "en-NRSV-27784",
        "title": "\nPaul Appeals to the Emperor\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "2",
        "text": "where the chief priests and the leaders of the Jews gave him a report against Paul. They appealed to him ",
        "reference": "en-NRSV-27785",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "3",
        "text": "and requested, as a favor to them against Paul, to have him transferred to Jerusalem. They were, in fact, planning an ambush to kill him along the way. ",
        "reference": "en-NRSV-27786",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "4",
        "text": "Festus replied that Paul was being kept at Caesarea, and that he himself intended to go there shortly. ",
        "reference": "en-NRSV-27787",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "5",
        "text": "“So,” he said, “let those of you who have the authority come down with me, and if there is anything wrong about the man, let them accuse him.”",
        "reference": "en-NRSV-27788",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "6",
        "text": "After he had stayed among them not more than eight or ten days, he went down to Caesarea; the next day he took his seat on the tribunal and ordered Paul to be brought. ",
        "reference": "en-NRSV-27789",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "7",
        "text": "When he arrived, the Jews who had gone down from Jerusalem surrounded him, bringing many serious charges against him, which they could not prove. ",
        "reference": "en-NRSV-27790",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "8",
        "text": "Paul said in his defense, “I have in no way committed an offense against the law of the Jews, or against the temple, or against the emperor.” ",
        "reference": "en-NRSV-27791",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "9",
        "text": "But Festus, wishing to do the Jews a favor, asked Paul, “Do you wish to go up to Jerusalem and be tried there before me on these charges?” ",
        "reference": "en-NRSV-27792",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "10",
        "text": "Paul said, “I am appealing to the emperor’s tribunal; this is where I should be tried. I have done no wrong to the Jews, as you very well know. ",
        "reference": "en-NRSV-27793",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "11",
        "text": "Now if I am in the wrong and have committed something for which I deserve to die, I am not trying to escape death; but if there is nothing to their charges against me, no one can turn me over to them. I appeal to the emperor.” ",
        "reference": "en-NRSV-27794",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "12",
        "text": "Then Festus, after he had conferred with his council, replied, “You have appealed to the emperor; to the emperor you will go.”",
        "reference": "en-NRSV-27795",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "13",
        "text": "\nAfter several days had passed, King Agrippa and Bernice arrived at Caesarea to welcome Festus. \n",
        "headerReference": "en-NRSV-27796",
        "title": "\nFestus Consults King Agrippa\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "14",
        "text": "Since they were staying there several days, Festus laid Paul’s case before the king, saying, “There is a man here who was left in prison by Felix. ",
        "reference": "en-NRSV-27797",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "15",
        "text": "When I was in Jerusalem, the chief priests and the elders of the Jews informed me about him and asked for a sentence against him. ",
        "reference": "en-NRSV-27798",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "16",
        "text": "I told them that it was not the custom of the Romans to hand over anyone before the accused had met the accusers face to face and had been given an opportunity to make a defense against the charge. ",
        "reference": "en-NRSV-27799",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "17",
        "text": "So when they met here, I lost no time, but on the next day took my seat on the tribunal and ordered the man to be brought. ",
        "reference": "en-NRSV-27800",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "18",
        "text": "When the accusers stood up, they did not charge him with any of the crimes that I was expecting. ",
        "reference": "en-NRSV-27801",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "19",
        "text": "Instead they had certain points of disagreement with him about their own religion and about a certain Jesus, who had died, but whom Paul asserted to be alive. ",
        "reference": "en-NRSV-27802",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "20",
        "text": "Since I was at a loss how to investigate these questions, I asked whether he wished to go to Jerusalem and be tried there on these charges. ",
        "reference": "en-NRSV-27803",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "21",
        "text": "But when Paul had appealed to be kept in custody for the decision of his Imperial Majesty, I ordered him to be held until I could send him to the emperor.” ",
        "reference": "en-NRSV-27804",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "22",
        "text": "Agrippa said to Festus, “I would like to hear the man myself.” “Tomorrow,” he said, “you will hear him.”",
        "reference": "en-NRSV-27805",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "23",
        "text": "\nSo on the next day Agrippa and Bernice came with great pomp, and they entered the audience hall with the military tribunes and the prominent men of the city. Then Festus gave the order and Paul was brought in. \n",
        "headerReference": "en-NRSV-27806",
        "title": "\nPaul Brought before Agrippa\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "24",
        "text": "And Festus said, “King Agrippa and all here present with us, you see this man about whom the whole Jewish community petitioned me, both in Jerusalem and here, shouting that he ought not to live any longer. ",
        "reference": "en-NRSV-27807",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "25",
        "text": "But I found that he had done nothing deserving death; and when he appealed to his Imperial Majesty, I decided to send him. ",
        "reference": "en-NRSV-27808",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "26",
        "text": "But I have nothing definite to write to our sovereign about him. Therefore I have brought him before all of you, and especially before you, King Agrippa, so that, after we have examined him, I may have something to write— ",
        "reference": "en-NRSV-27809",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "25",
        "verse": "27",
        "text": "for it seems to me unreasonable to send a prisoner without indicating the charges against him.”",
        "reference": "en-NRSV-27810",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "1",
        "text": "Agrippa said to Paul, “You have permission to speak for yourself.” Then Paul stretched out his hand and began to defend himself:",
        "headerReference": "en-NRSV-27811",
        "title": "\nPaul Defends Himself before Agrippa\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "2",
        "text": "“I consider myself fortunate that it is before you, King Agrippa, I am to make my defense today against all the accusations of the Jews, ",
        "reference": "en-NRSV-27812",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "3",
        "text": "because you are especially familiar with all the customs and controversies of the Jews; therefore I beg of you to listen to me patiently.",
        "reference": "en-NRSV-27813",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "4",
        "text": "“All the Jews know my way of life from my youth, a life spent from the beginning among my own people and in Jerusalem. ",
        "reference": "en-NRSV-27814",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "5",
        "text": "They have known for a long time, if they are willing to testify, that I have belonged to the strictest sect of our religion and lived as a Pharisee. ",
        "reference": "en-NRSV-27815",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "6",
        "text": "And now I stand here on trial on account of my hope in the promise made by God to our ancestors, ",
        "reference": "en-NRSV-27816",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "7",
        "text": "a promise that our twelve tribes hope to attain, as they earnestly worship day and night. It is for this hope, your Excellency, that I am accused by Jews! ",
        "reference": "en-NRSV-27817",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "8",
        "text": "Why is it thought incredible by any of you that God raises the dead?",
        "reference": "en-NRSV-27818",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "9",
        "text": "“Indeed, I myself was convinced that I ought to do many things against the name of Jesus of Nazareth. ",
        "reference": "en-NRSV-27819",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "10",
        "text": "And that is what I did in Jerusalem; with authority received from the chief priests, I not only locked up many of the saints in prison, but I also cast my vote against them when they were being condemned to death. ",
        "reference": "en-NRSV-27820",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "11",
        "text": "By punishing them often in all the synagogues I tried to force them to blaspheme; and since I was so furiously enraged at them, I pursued them even to foreign cities.",
        "reference": "en-NRSV-27821",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "12",
        "text": "\n“With this in mind, I was traveling to Damascus with the authority and commission of the chief priests, \n",
        "headerReference": "en-NRSV-27822",
        "title": "\nPaul Tells of His Conversion\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "13",
        "text": "when at midday along the road, your Excellency, I saw a light from heaven, brighter than the sun, shining around me and my companions. ",
        "reference": "en-NRSV-27823",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "14",
        "text": "When we had all fallen to the ground, I heard a voice saying to me in the Hebrew language, ‘Saul, Saul, why are you persecuting me? It hurts you to kick against the goads.’ ",
        "reference": "en-NRSV-27824",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "15",
        "text": "I asked, ‘Who are you, Lord?’ The Lord answered, ‘I am Jesus whom you are persecuting. ",
        "reference": "en-NRSV-27825",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "16",
        "text": "But get up and stand on your feet; for I have appeared to you for this purpose, to appoint you to serve and testify to the things in which you have seen me and to those in which I will appear to you. ",
        "reference": "en-NRSV-27826",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "17",
        "text": "I will rescue you from your people and from the Gentiles—to whom I am sending you ",
        "reference": "en-NRSV-27827",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "18",
        "text": "to open their eyes so that they may turn from darkness to light and from the power of Satan to God, so that they may receive forgiveness of sins and a place among those who are sanctified by faith in me.’",
        "reference": "en-NRSV-27828",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "19",
        "text": "\n“After that, King Agrippa, I was not disobedient to the heavenly vision, \n",
        "headerReference": "en-NRSV-27829",
        "title": "\nPaul Tells of His Preaching\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "20",
        "text": "but declared first to those in Damascus, then in Jerusalem and throughout the countryside of Judea, and also to the Gentiles, that they should repent and turn to God and do deeds consistent with repentance. ",
        "reference": "en-NRSV-27830",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "21",
        "text": "For this reason the Jews seized me in the temple and tried to kill me. ",
        "reference": "en-NRSV-27831",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "22",
        "text": "To this day I have had help from God, and so I stand here, testifying to both small and great, saying nothing but what the prophets and Moses said would take place: ",
        "reference": "en-NRSV-27832",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "23",
        "text": "that the Messiah must suffer, and that, by being the first to rise from the dead, he would proclaim light both to our people and to the Gentiles.”",
        "reference": "en-NRSV-27833",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "24",
        "text": "\nWhile he was making this defense, Festus exclaimed, “You are out of your mind, Paul! Too much learning is driving you insane!” \n",
        "headerReference": "en-NRSV-27834",
        "title": "\nPaul Appeals to Agrippa to Believe\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "25",
        "text": "But Paul said, “I am not out of my mind, most excellent Festus, but I am speaking the sober truth. ",
        "reference": "en-NRSV-27835",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "26",
        "text": "Indeed the king knows about these things, and to him I speak freely; for I am certain that none of these things has escaped his notice, for this was not done in a corner. ",
        "reference": "en-NRSV-27836",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "27",
        "text": "King Agrippa, do you believe the prophets? I know that you believe.” ",
        "reference": "en-NRSV-27837",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "28",
        "text": "Agrippa said to Paul, “Are you so quickly persuading me to become a Christian?” ",
        "reference": "en-NRSV-27838",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "29",
        "text": "Paul replied, “Whether quickly or not, I pray to God that not only you but also all who are listening to me today might become such as I am—except for these chains.”",
        "reference": "en-NRSV-27839",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "30",
        "text": "Then the king got up, and with him the governor and Bernice and those who had been seated with them; ",
        "reference": "en-NRSV-27840",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "31",
        "text": "and as they were leaving, they said to one another, “This man is doing nothing to deserve death or imprisonment.” ",
        "reference": "en-NRSV-27841",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "26",
        "verse": "32",
        "text": "Agrippa said to Festus, “This man could have been set free if he had not appealed to the emperor.”",
        "reference": "en-NRSV-27842",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "1",
        "text": "When it was decided that we were to sail for Italy, they transferred Paul and some other prisoners to a centurion of the Augustan Cohort, named Julius. ",
        "headerReference": "en-NRSV-27843",
        "title": "\nPaul Sails for Rome\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "2",
        "text": "Embarking on a ship of Adramyttium that was about to set sail to the ports along the coast of Asia, we put to sea, accompanied by Aristarchus, a Macedonian from Thessalonica. ",
        "reference": "en-NRSV-27844",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "3",
        "text": "The next day we put in at Sidon; and Julius treated Paul kindly, and allowed him to go to his friends to be cared for. ",
        "reference": "en-NRSV-27845",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "4",
        "text": "Putting out to sea from there, we sailed under the lee of Cyprus, because the winds were against us. ",
        "reference": "en-NRSV-27846",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "5",
        "text": "After we had sailed across the sea that is off Cilicia and Pamphylia, we came to Myra in Lycia. ",
        "reference": "en-NRSV-27847",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "6",
        "text": "There the centurion found an Alexandrian ship bound for Italy and put us on board. ",
        "reference": "en-NRSV-27848",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "7",
        "text": "We sailed slowly for a number of days and arrived with difficulty off Cnidus, and as the wind was against us, we sailed under the lee of Crete off Salmone. ",
        "reference": "en-NRSV-27849",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "8",
        "text": "Sailing past it with difficulty, we came to a place called Fair Havens, near the city of Lasea.",
        "reference": "en-NRSV-27850",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "9",
        "text": "Since much time had been lost and sailing was now dangerous, because even the Fast had already gone by, Paul advised them, ",
        "reference": "en-NRSV-27851",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "10",
        "text": "saying, “Sirs, I can see that the voyage will be with danger and much heavy loss, not only of the cargo and the ship, but also of our lives.” ",
        "reference": "en-NRSV-27852",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "11",
        "text": "But the centurion paid more attention to the pilot and to the owner of the ship than to what Paul said. ",
        "reference": "en-NRSV-27853",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "12",
        "text": "Since the harbor was not suitable for spending the winter, the majority was in favor of putting to sea from there, on the chance that somehow they could reach Phoenix, where they could spend the winter. It was a harbor of Crete, facing southwest and northwest.",
        "reference": "en-NRSV-27854",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "13",
        "text": "\nWhen a moderate south wind began to blow, they thought they could achieve their purpose; so they weighed anchor and began to sail past Crete, close to the shore. \n",
        "headerReference": "en-NRSV-27855",
        "title": "\nThe Storm at Sea\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "14",
        "text": "But soon a violent wind, called the northeaster, rushed down from Crete. ",
        "reference": "en-NRSV-27856",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "15",
        "text": "Since the ship was caught and could not be turned head-on into the wind, we gave way to it and were driven. ",
        "reference": "en-NRSV-27857",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "16",
        "text": "By running under the lee of a small island called Cauda we were scarcely able to get the ship’s boat under control. ",
        "reference": "en-NRSV-27858",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "17",
        "text": "After hoisting it up they took measures to undergird the ship; then, fearing that they would run on the Syrtis, they lowered the sea anchor and so were driven. ",
        "reference": "en-NRSV-27859",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "18",
        "text": "We were being pounded by the storm so violently that on the next day they began to throw the cargo overboard, ",
        "reference": "en-NRSV-27860",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "19",
        "text": "and on the third day with their own hands they threw the ship’s tackle overboard. ",
        "reference": "en-NRSV-27861",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "20",
        "text": "When neither sun nor stars appeared for many days, and no small tempest raged, all hope of our being saved was at last abandoned.",
        "reference": "en-NRSV-27862",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "21",
        "text": "Since they had been without food for a long time, Paul then stood up among them and said, “Men, you should have listened to me and not have set sail from Crete and thereby avoided this damage and loss. ",
        "reference": "en-NRSV-27863",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "22",
        "text": "I urge you now to keep up your courage, for there will be no loss of life among you, but only of the ship. ",
        "reference": "en-NRSV-27864",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "23",
        "text": "For last night there stood by me an angel of the God to whom I belong and whom I worship, ",
        "reference": "en-NRSV-27865",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "24",
        "text": "and he said, ‘Do not be afraid, Paul; you must stand before the emperor; and indeed, God has granted safety to all those who are sailing with you.’ ",
        "reference": "en-NRSV-27866",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "25",
        "text": "So keep up your courage, men, for I have faith in God that it will be exactly as I have been told. ",
        "reference": "en-NRSV-27867",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "26",
        "text": "But we will have to run aground on some island.”",
        "reference": "en-NRSV-27868",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "27",
        "text": "When the fourteenth night had come, as we were drifting across the sea of Adria, about midnight the sailors suspected that they were nearing land. ",
        "reference": "en-NRSV-27869",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "28",
        "text": "So they took soundings and found twenty fathoms; a little farther on they took soundings again and found fifteen fathoms. ",
        "reference": "en-NRSV-27870",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "29",
        "text": "Fearing that we might run on the rocks, they let down four anchors from the stern and prayed for day to come. ",
        "reference": "en-NRSV-27871",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "30",
        "text": "But when the sailors tried to escape from the ship and had lowered the boat into the sea, on the pretext of putting out anchors from the bow, ",
        "reference": "en-NRSV-27872",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "31",
        "text": "Paul said to the centurion and the soldiers, “Unless these men stay in the ship, you cannot be saved.” ",
        "reference": "en-NRSV-27873",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "32",
        "text": "Then the soldiers cut away the ropes of the boat and set it adrift.",
        "reference": "en-NRSV-27874",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "33",
        "text": "Just before daybreak, Paul urged all of them to take some food, saying, “Today is the fourteenth day that you have been in suspense and remaining without food, having eaten nothing. ",
        "reference": "en-NRSV-27875",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "34",
        "text": "Therefore I urge you to take some food, for it will help you survive; for none of you will lose a hair from your heads.” ",
        "reference": "en-NRSV-27876",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "35",
        "text": "After he had said this, he took bread; and giving thanks to God in the presence of all, he broke it and began to eat. ",
        "reference": "en-NRSV-27877",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "36",
        "text": "Then all of them were encouraged and took food for themselves. ",
        "reference": "en-NRSV-27878",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "37",
        "text": "(We were in all two hundred seventy-six persons in the ship.) ",
        "reference": "en-NRSV-27879",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "38",
        "text": "After they had satisfied their hunger, they lightened the ship by throwing the wheat into the sea.",
        "reference": "en-NRSV-27880",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "39",
        "text": "\nIn the morning they did not recognize the land, but they noticed a bay with a beach, on which they planned to run the ship ashore, if they could. \n",
        "headerReference": "en-NRSV-27881",
        "title": "\nThe Shipwreck\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "40",
        "text": "So they cast off the anchors and left them in the sea. At the same time they loosened the ropes that tied the steering-oars; then hoisting the foresail to the wind, they made for the beach. ",
        "reference": "en-NRSV-27882",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "41",
        "text": "But striking a reef, they ran the ship aground; the bow stuck and remained immovable, but the stern was being broken up by the force of the waves. ",
        "reference": "en-NRSV-27883",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "42",
        "text": "The soldiers’ plan was to kill the prisoners, so that none might swim away and escape; ",
        "reference": "en-NRSV-27884",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "43",
        "text": "but the centurion, wishing to save Paul, kept them from carrying out their plan. He ordered those who could swim to jump overboard first and make for the land, ",
        "reference": "en-NRSV-27885",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "27",
        "verse": "44",
        "text": "and the rest to follow, some on planks and others on pieces of the ship. And so it was that all were brought safely to land.",
        "reference": "en-NRSV-27886",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "1",
        "text": "After we had reached safety, we then learned that the island was called Malta. ",
        "headerReference": "en-NRSV-27887",
        "title": "\nPaul on the Island of Malta\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "2",
        "text": "The natives showed us unusual kindness. Since it had begun to rain and was cold, they kindled a fire and welcomed all of us around it. ",
        "reference": "en-NRSV-27888",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "3",
        "text": "Paul had gathered a bundle of brushwood and was putting it on the fire, when a viper, driven out by the heat, fastened itself on his hand. ",
        "reference": "en-NRSV-27889",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "4",
        "text": "When the natives saw the creature hanging from his hand, they said to one another, “This man must be a murderer; though he has escaped from the sea, justice has not allowed him to live.” ",
        "reference": "en-NRSV-27890",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "5",
        "text": "He, however, shook off the creature into the fire and suffered no harm. ",
        "reference": "en-NRSV-27891",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "6",
        "text": "They were expecting him to swell up or drop dead, but after they had waited a long time and saw that nothing unusual had happened to him, they changed their minds and began to say that he was a god.",
        "reference": "en-NRSV-27892",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "7",
        "text": "Now in the neighborhood of that place were lands belonging to the leading man of the island, named Publius, who received us and entertained us hospitably for three days. ",
        "reference": "en-NRSV-27893",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "8",
        "text": "It so happened that the father of Publius lay sick in bed with fever and dysentery. Paul visited him and cured him by praying and putting his hands on him. ",
        "reference": "en-NRSV-27894",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "9",
        "text": "After this happened, the rest of the people on the island who had diseases also came and were cured. ",
        "reference": "en-NRSV-27895",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "10",
        "text": "They bestowed many honors on us, and when we were about to sail, they put on board all the provisions we needed.",
        "reference": "en-NRSV-27896",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "11",
        "text": "\nThree months later we set sail on a ship that had wintered at the island, an Alexandrian ship with the Twin Brothers as its figurehead. \n",
        "headerReference": "en-NRSV-27897",
        "title": "\nPaul Arrives at Rome\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "12",
        "text": "We put in at Syracuse and stayed there for three days; ",
        "reference": "en-NRSV-27898",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "13",
        "text": "then we weighed anchor and came to Rhegium. After one day there a south wind sprang up, and on the second day we came to Puteoli. ",
        "reference": "en-NRSV-27899",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "14",
        "text": "There we found believers and were invited to stay with them for seven days. And so we came to Rome. ",
        "reference": "en-NRSV-27900",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "15",
        "text": "The believers from there, when they heard of us, came as far as the Forum of Appius and Three Taverns to meet us. On seeing them, Paul thanked God and took courage.",
        "reference": "en-NRSV-27901",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "16",
        "text": "When we came into Rome, Paul was allowed to live by himself, with the soldier who was guarding him.",
        "reference": "en-NRSV-27902",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "17",
        "text": "\nThree days later he called together the local leaders of the Jews. When they had assembled, he said to them, “Brothers, though I had done nothing against our people or the customs of our ancestors, yet I was arrested in Jerusalem and handed over to the Romans. \n",
        "headerReference": "en-NRSV-27903",
        "title": "\nPaul and Jewish Leaders in Rome\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "18",
        "text": "When they had examined me, the Romans wanted to release me, because there was no reason for the death penalty in my case. ",
        "reference": "en-NRSV-27904",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "19",
        "text": "But when the Jews objected, I was compelled to appeal to the emperor—even though I had no charge to bring against my nation. ",
        "reference": "en-NRSV-27905",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "20",
        "text": "For this reason therefore I have asked to see you and speak with you, since it is for the sake of the hope of Israel that I am bound with this chain.” ",
        "reference": "en-NRSV-27906",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "21",
        "text": "They replied, “We have received no letters from Judea about you, and none of the brothers coming here has reported or spoken anything evil about you. ",
        "reference": "en-NRSV-27907",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "22",
        "text": "But we would like to hear from you what you think, for with regard to this sect we know that everywhere it is spoken against.”",
        "reference": "en-NRSV-27908",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "23",
        "text": "\nAfter they had set a day to meet with him, they came to him at his lodgings in great numbers. From morning until evening he explained the matter to them, testifying to the kingdom of God and trying to convince them about Jesus both from the law of Moses and from the prophets. \n",
        "headerReference": "en-NRSV-27909",
        "title": "\nPaul Preaches in Rome\n",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "24",
        "text": "Some were convinced by what he had said, while others refused to believe. ",
        "reference": "en-NRSV-27910",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "25",
        "text": "So they disagreed with each other; and as they were leaving, Paul made one further statement: “The Holy Spirit was right in saying to your ancestors through the prophet Isaiah,",
        "reference": "en-NRSV-27911",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "26",
        "text": "‘Go to this people and say, \nYou will indeed listen, but never understand,    \n \nand you will indeed look, but never perceive.\n",
        "reference": "en-NRSV-27912",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "27",
        "text": "For this people’s heart has grown dull,     \nand their ears are hard of hearing,\n \nand they have shut their eyes;\n \nso that they might not look with their eyes,\n \nand listen with their ears,\n \nand understand with their heart and turn—    \n \nand I would heal them.’\n",
        "reference": "en-NRSV-27913",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "28",
        "text": "Let it be known to you then that this salvation of God has been sent to the Gentiles; they will listen.”",
        "reference": "en-NRSV-27914",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "30",
        "text": "He lived there two whole years at his own expense and welcomed all who came to him, ",
        "reference": "en-NRSV-27915",
        "headerReference": "",
        "title": "",
        "paragraph": "\n"
    },
    {
        "bookname": "Acts",
        "chapter": "28",
        "verse": "31",
        "text": "proclaiming the kingdom of God and teaching about the Lord Jesus Christ with all boldness and without hindrance.",
        "reference": "en-NRSV-27916",
        "headerReference": "",
        "title": "",
        "paragraph": ""
    }
];



var jsonplan = [{
        "Order": 1,
        "Reference": "Luke 1:1-56",
        "Date": "2/11/2018",
        "startindex": 0,
        "endindex": 56
    },
    {
        "Order": 2,
        "Reference": "Luke 1:57-80",
        "Date": "2/12/2018",
        "startindex": 56,
        "endindex": 80
    },
    {
        "Order": 3,
        "Reference": "Luke 2:1-21",
        "Date": "2/13/2018",
        "startindex": 80,
        "endindex": 101
    },
    {
        "Order": 4,
        "Reference": "Luke 2:22-52",
        "Date": "2/14/2018",
        "startindex": 101,
        "endindex": 132
    },
    {
        "Order": 5,
        "Reference": "Luke 3:1-20",
        "Date": "2/15/2018",
        "startindex": 132,
        "endindex": 152
    },
    {
        "Order": 6,
        "Reference": "Luke 3:21-38",
        "Date": "2/16/2018",
        "startindex": 152,
        "endindex": 170
    },
    {
        "Order": 7,
        "Reference": "Luke 4:1-13 ",
        "Date": "2/17/2018",
        "startindex": 170,
        "endindex": 183
    },
    {
        "Order": 8,
        "Reference": "Luke 4:14-44 ",
        "Date": "2/18/2018",
        "startindex": 183,
        "endindex": 214
    },
    {
        "Order": 9,
        "Reference": "Luke 5:1-16 ",
        "Date": "2/19/2018",
        "startindex": 214,
        "endindex": 230
    },
    {
        "Order": 10,
        "Reference": "Luke 5:17-39 ",
        "Date": "2/20/2018",
        "startindex": 230,
        "endindex": 253
    },
    {
        "Order": 11,
        "Reference": "Luke 6:1-26 ",
        "Date": "2/21/2018",
        "startindex": 253,
        "endindex": 279
    },
    {
        "Order": 12,
        "Reference": "Luke 6:27-49 ",
        "Date": "2/22/2018",
        "startindex": 279,
        "endindex": 302
    },
    {
        "Order": 13,
        "Reference": "Luke 7:1-35 ",
        "Date": "2/23/2018",
        "startindex": 302,
        "endindex": 337
    },
    {
        "Order": 14,
        "Reference": "Luke 7:36-50",
        "Date": "2/24/2018",
        "startindex": 337,
        "endindex": 352
    },
    {
        "Order": 15,
        "Reference": "Luke 8:1-25 ",
        "Date": "2/25/2018",
        "startindex": 352,
        "endindex": 377
    },
    {
        "Order": 16,
        "Reference": "Luke 8:26-56",
        "Date": "2/26/2018",
        "startindex": 377,
        "endindex": 408
    },
    {
        "Order": 17,
        "Reference": "Luke 9:1-27 ",
        "Date": "2/27/2018",
        "startindex": 408,
        "endindex": 435
    },
    {
        "Order": 18,
        "Reference": "Luke 9:28-62 ",
        "Date": "2/28/2018",
        "startindex": 435,
        "endindex": 470
    },
    {
        "Order": 19,
        "Reference": "Luke 10:1-20 ",
        "Date": "3/1/2018",
        "startindex": 470,
        "endindex": 490
    },
    {
        "Order": 20,
        "Reference": "Luke 10:21-42 ",
        "Date": "3/2/2018",
        "startindex": 490,
        "endindex": 512
    },
    {
        "Order": 21,
        "Reference": "Luke 11:1-13 ",
        "Date": "3/3/2018",
        "startindex": 512,
        "endindex": 525
    },
    {
        "Order": 22,
        "Reference": "Luke  11:14-54 ",
        "Date": "3/4/2018",
        "startindex": 525,
        "endindex": 566
    },
    {
        "Order": 23,
        "Reference": "Luke 12:1-21 ",
        "Date": "3/5/2018",
        "startindex": 566,
        "endindex": 587
    },
    {
        "Order": 24,
        "Reference": "Luke 12:22-59 ",
        "Date": "3/6/2018",
        "startindex": 587,
        "endindex": 625
    },
    {
        "Order": 25,
        "Reference": "Luke 13:1-21 ",
        "Date": "3/7/2018",
        "startindex": 625,
        "endindex": 646
    },
    {
        "Order": 26,
        "Reference": "Luke 13:22-35 ",
        "Date": "3/8/2018",
        "startindex": 646,
        "endindex": 660
    },
    {
        "Order": 27,
        "Reference": "Luke 14:1-24 ",
        "Date": "3/9/2018",
        "startindex": 660,
        "endindex": 684
    },
    {
        "Order": 28,
        "Reference": "Luke 14:25-35 ",
        "Date": "3/10/2018",
        "startindex": 684,
        "endindex": 695
    },
    {
        "Order": 29,
        "Reference": "Luke 15:1-10 ",
        "Date": "3/11/2018",
        "startindex": 695,
        "endindex": 705
    },
    {
        "Order": 30,
        "Reference": "Luke 15:11-32 ",
        "Date": "3/12/2018",
        "startindex": 705,
        "endindex": 727
    },
    {
        "Order": 31,
        "Reference": "Luke 16:1-18 ",
        "Date": "3/13/2018",
        "startindex": 727,
        "endindex": 745
    },
    {
        "Order": 32,
        "Reference": "Luke 16:19-31 ",
        "Date": "3/14/2018",
        "startindex": 745,
        "endindex": 758
    },
    {
        "Order": 33,
        "Reference": "Luke 17:1-10",
        "Date": "3/15/2018",
        "startindex": 758,
        "endindex": 768
    },
    {
        "Order": 34,
        "Reference": "Luke 17:11-37",
        "Date": "3/16/2018",
        "startindex": 768,
        "endindex": 795
    },
    {
        "Order": 35,
        "Reference": "Luke 18:1-17",
        "Date": "3/17/2018",
        "startindex": 795,
        "endindex": 812
    },
    {
        "Order": 36,
        "Reference": "Luke 18:18-43 ",
        "Date": "3/18/2018",
        "startindex": 812,
        "endindex": 838
    },
    {
        "Order": 37,
        "Reference": "Luke 19:1-27 ",
        "Date": "3/19/2018",
        "startindex": 838,
        "endindex": 865
    },
    {
        "Order": 38,
        "Reference": "Luke 19:28-48 ",
        "Date": "3/20/2018",
        "startindex": 865,
        "endindex": 886
    },
    {
        "Order": 39,
        "Reference": "Luke 20:1-47 ",
        "Date": "3/21/2018",
        "startindex": 886,
        "endindex": 933
    },
    {
        "Order": 40,
        "Reference": "Luke 21:1-38 ",
        "Date": "3/22/2018",
        "startindex": 933,
        "endindex": 971
    },
    {
        "Order": 41,
        "Reference": "Luke 22:1-23 ",
        "Date": "3/23/2018",
        "startindex": 971,
        "endindex": 994
    },
    {
        "Order": 42,
        "Reference": "Luke 22:24-46",
        "Date": "3/24/2018",
        "startindex": 994,
        "endindex": 1017
    },
    {
        "Order": 43,
        "Reference": "Luke 22:47-71 ",
        "Date": "3/25/2018",
        "startindex": 1017,
        "endindex": 1042
    },
    {
        "Order": 44,
        "Reference": "Luke 23:1-25",
        "Date": "3/26/2018",
        "startindex": 1042,
        "endindex": 1067
    },
    {
        "Order": 45,
        "Reference": "Luke 23:26-43 ",
        "Date": "3/27/2018",
        "startindex": 1067,
        "endindex": 1085
    },
    {
        "Order": 46,
        "Reference": "Luke 23:44-56",
        "Date": "3/28/2018",
        "startindex": 1085,
        "endindex": 1098
    },
    {
        "Order": 47,
        "Reference": "Luke 24:1-12 ",
        "Date": "3/29/2018",
        "startindex": 1098,
        "endindex": 1110
    },
    {
        "Order": 48,
        "Reference": "Luke 24:13-35 ",
        "Date": "3/30/2018",
        "startindex": 1110,
        "endindex": 1133
    },
    {
        "Order": 49,
        "Reference": "Luke 24:36-53",
        "Date": "3/31/2018",
        "startindex": 1133,
        "endindex": 1151
    },
    {
        "Order": 50,
        "Reference": "Acts 1:1-11",
        "Date": "4/1/2018",
        "startindex": 1151,
        "endindex": 1162
    },
    {
        "Order": 51,
        "Reference": "Acts 1:12-26",
        "Date": "4/2/2018",
        "startindex": 1162,
        "endindex": 1177
    },
    {
        "Order": 52,
        "Reference": "Acts 2:1-13",
        "Date": "4/3/2018",
        "startindex": 1177,
        "endindex": 1190
    },
    {
        "Order": 53,
        "Reference": "Acts 2:14-36",
        "Date": "4/4/2018",
        "startindex": 1190,
        "endindex": 1213
    },
    {
        "Order": 54,
        "Reference": "Acts 2:37-47",
        "Date": "4/5/2018",
        "startindex": 1213,
        "endindex": 1224
    },
    {
        "Order": 55,
        "Reference": "Acts 3:1-26",
        "Date": "4/6/2018",
        "startindex": 1224,
        "endindex": 1250
    },
    {
        "Order": 56,
        "Reference": "Acts 4:1-22",
        "Date": "4/7/2018",
        "startindex": 1250,
        "endindex": 1272
    },
    {
        "Order": 57,
        "Reference": "Acts 4:23-31",
        "Date": "4/8/2018",
        "startindex": 1272,
        "endindex": 1281
    },
    {
        "Order": 58,
        "Reference": "Acts 4:32-37 ",
        "Date": "4/9/2018",
        "startindex": 1281,
        "endindex": 1287
    },
    {
        "Order": 59,
        "Reference": "Acts 5:1-11 ",
        "Date": "4/10/2018",
        "startindex": 1287,
        "endindex": 1298
    },
    {
        "Order": 60,
        "Reference": "Acts 5:12-26 ",
        "Date": "4/11/2018",
        "startindex": 1298,
        "endindex": 1313
    },
    {
        "Order": 61,
        "Reference": "Acts 5:27-42",
        "Date": "4/12/2018",
        "startindex": 1313,
        "endindex": 1329
    },
    {
        "Order": 62,
        "Reference": "Acts 6:1-7",
        "Date": "4/13/2018",
        "startindex": 1329,
        "endindex": 1336
    },
    {
        "Order": 63,
        "Reference": "Acts 6:8-15",
        "Date": "4/14/2018",
        "startindex": 1336,
        "endindex": 1344
    },
    {
        "Order": 64,
        "Reference": "Acts 7:1-60 ",
        "Date": "4/15/2018",
        "startindex": 1344,
        "endindex": 1404
    },
    {
        "Order": 65,
        "Reference": "Acts 8:1-8 ",
        "Date": "4/16/2018",
        "startindex": 1404,
        "endindex": 1412
    },
    {
        "Order": 66,
        "Reference": "Acts 8:9-25 ",
        "Date": "4/17/2018",
        "startindex": 1412,
        "endindex": 1429
    },
    {
        "Order": 67,
        "Reference": "Acts 8:26-40",
        "Date": "4/18/2018",
        "startindex": 1429,
        "endindex": 1444
    },
    {
        "Order": 68,
        "Reference": "Acts 9:1-31 ",
        "Date": "4/19/2018",
        "startindex": 1444,
        "endindex": 1475
    },
    {
        "Order": 69,
        "Reference": "Acts 9:32-43 ",
        "Date": "4/20/2018",
        "startindex": 1475,
        "endindex": 1487
    },
    {
        "Order": 70,
        "Reference": "Acts 10:1-16 ",
        "Date": "4/21/2018",
        "startindex": 1487,
        "endindex": 1503
    },
    {
        "Order": 71,
        "Reference": "Acts 10:17-33",
        "Date": "4/22/2018",
        "startindex": 1503,
        "endindex": 1520
    },
    {
        "Order": 72,
        "Reference": "Acts 10:34-48",
        "Date": "4/23/2018",
        "startindex": 1520,
        "endindex": 1535
    },
    {
        "Order": 73,
        "Reference": "Acts 11:1-18",
        "Date": "4/24/2018",
        "startindex": 1535,
        "endindex": 1553
    },
    {
        "Order": 74,
        "Reference": "Acts 11:19-30 ",
        "Date": "4/25/2018",
        "startindex": 1553,
        "endindex": 1565
    },
    {
        "Order": 75,
        "Reference": "Acts 12:1-19 ",
        "Date": "4/26/2018",
        "startindex": 1565,
        "endindex": 1584
    },
    {
        "Order": 76,
        "Reference": "Acts 12:20-25",
        "Date": "4/27/2018",
        "startindex": 1584,
        "endindex": 1590
    },
    {
        "Order": 77,
        "Reference": "Acts 13:1-12 ",
        "Date": "4/28/2018",
        "startindex": 1590,
        "endindex": 1602
    },
    {
        "Order": 78,
        "Reference": "Acts 13:13-52",
        "Date": "4/29/2018",
        "startindex": 1602,
        "endindex": 1642
    },
    {
        "Order": 79,
        "Reference": "Acts 14:1-20",
        "Date": "4/30/2018",
        "startindex": 1642,
        "endindex": 1662
    },
    {
        "Order": 80,
        "Reference": "Acts 14:21-28 ",
        "Date": "5/1/2018",
        "startindex": 1662,
        "endindex": 1670
    },
    {
        "Order": 81,
        "Reference": "Acts 15:1-21 ",
        "Date": "5/2/2018",
        "startindex": 1670,
        "endindex": 1691
    },
    {
        "Order": 82,
        "Reference": "Acts 15:22-35",
        "Date": "5/3/2018",
        "startindex": 1691,
        "endindex": 1705
    },
    {
        "Order": 83,
        "Reference": "Acts 15:36-41 ",
        "Date": "5/4/2018",
        "startindex": 1705,
        "endindex": 1711
    },
    {
        "Order": 84,
        "Reference": "Acts 16:1-15",
        "Date": "5/5/2018",
        "startindex": 1711,
        "endindex": 1726
    },
    {
        "Order": 85,
        "Reference": "Acts 16:16-40",
        "Date": "5/6/2018",
        "startindex": 1726,
        "endindex": 1751
    },
    {
        "Order": 86,
        "Reference": "Acts 17:1-9 ",
        "Date": "5/7/2018",
        "startindex": 1751,
        "endindex": 1760
    },
    {
        "Order": 87,
        "Reference": "Acts 17:10-34 ",
        "Date": "5/8/2018",
        "startindex": 1760,
        "endindex": 1785
    },
    {
        "Order": 88,
        "Reference": "Acts 18:1-28",
        "Date": "5/9/2018",
        "startindex": 1785,
        "endindex": 1813
    },
    {
        "Order": 89,
        "Reference": "Acts 19:1-20:16 ",
        "Date": "5/10/2018",
        "startindex": 1813,
        "endindex": 1869
    },
    {
        "Order": 90,
        "Reference": "Acts 20:17-38 ",
        "Date": "5/11/2018",
        "startindex": 1869,
        "endindex": 1891
    },
    {
        "Order": 91,
        "Reference": "Acts 21:1-26",
        "Date": "5/12/2018",
        "startindex": 1891,
        "endindex": 1917
    },
    {
        "Order": 92,
        "Reference": "Acts 21:27-22:29 ",
        "Date": "5/13/2018",
        "startindex": 1917,
        "endindex": 1960
    },
    {
        "Order": 93,
        "Reference": "Acts 22:30-23:11 ",
        "Date": "5/14/2018",
        "startindex": 1960,
        "endindex": 1972
    },
    {
        "Order": 94,
        "Reference": "Acts 23:12-35 ",
        "Date": "5/15/2018",
        "startindex": 1972,
        "endindex": 1996
    },
    {
        "Order": 95,
        "Reference": "Acts 24:1-27 ",
        "Date": "5/16/2018",
        "startindex": 1996,
        "endindex": 2023
    },
    {
        "Order": 96,
        "Reference": "Acts 25:1-22 ",
        "Date": "5/17/2018",
        "startindex": 2023,
        "endindex": 2045
    },
    {
        "Order": 97,
        "Reference": "Acts 25:23-26:32",
        "Date": "5/18/2018",
        "startindex": 2045,
        "endindex": 2082
    },
    {
        "Order": 98,
        "Reference": "Acts 27:1-12",
        "Date": "5/19/2018",
        "startindex": 2082,
        "endindex": 2094
    },
    {
        "Order": 99,
        "Reference": "Acts 27:13-28:31",
        "Date": "5/20/2018",
        "startindex": 2094,
        "endindex": 2157
    }
];


const handlers = {
    'LaunchRequest': function() {
        this.emit('goodbook');
    },
    'goodbook': function() {
        try {
            var slotValue = isSlotValid(this.event.request, "theday");
        } catch (err) {
            var slotValue = this.event.request.timestamp;
        }
        if (slotValue) {
            //slot has a valid value
            var d = new Date(slotValue);
        } else {
            //no valid slot
            var d = new Date();
        }
        d.setHours(d.getHours() - 6);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        console.log(d)
        var startday = new Date("2/11/2018");


        //delete before start//
        //d.setDate(9);
        //console.log(d);
        var i = 0;
        var len = 0;
        var themessage = '';
        var thecardack = '';
        var thespeechack = '';
        var thecardmessage = '';
        if (d.getTime() < startday.getTime()) {
            d = new Date("2/11/2018");

        }
        var dayindex = Math.ceil((d.getTime() - startday.getTime()) / (86400000));
        var targetday = new Date(jsonplan[dayindex].Date)
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        for (i = jsonplan[dayindex].startindex, len = jsonplan[dayindex].endindex, themessage = "Here is the reading for " + targetday.toLocaleDateString("en-US", options) + " from " + jsonplan[dayindex].Reference + ": \n"; i < len; i++) {
            themessage += jsonContent[i].title;
            themessage += jsonContent[i].paragraph;
            themessage += jsonContent[i].text + " ";
        }
        var thepattern = '/\n+/ig'
        themessage = themessage.replace(thepattern, '\n');
        thecardack = '\nThe Scriptures quoted are from the  New Revised Standard Version Bible, copyright © 1989 National Council of the Churches of Christ in the United States of America. Used by permission. All rights reserved.';
        thespeechack = '\n<emphasis level="reduced">The Scriptures quoted are from the  New Revised Standard Version Bible, copyright nineteen eighty-nine National Council of the Churches of Christ in the United States of America. Used by permission. All rights reserved.</emphasis>'
        thecardmessage = themessage + thecardack;
        themessage += thespeechack
        this.emit(':tellWithCard', themessage, 'Good Book Club Reading', thecardmessage);
    },

    'AMAZON.HelpIntent': function() {
        const speechOutput = 'This is a placeholder help message';
        const reprompt = 'This is a placeholder help message';
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', 'Action Cancelled');
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', 'Action Stopped');
    },
};

exports.handler = function(event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};




function isSlotValid(request, slotName) {
    var slot = request.intent.slots[slotName];
    //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
    var slotValue;

    //if we have a slot, get the text and store it into speechOutput
    if (slot && slot.value) {
        //we have a value in the slot
        slotValue = slot.value.toLowerCase();
        return slotValue;
    } else {
        //we didn't get a value in the slot.
        return false;
    }
}
