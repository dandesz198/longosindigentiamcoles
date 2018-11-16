const testDataUsers = [
    {
        username: "Pisti",
        password: "nemPisike",
        email: "pistike2002@freemail.hu",
        role: "user"
    },
    {
        username: "Anna",
        password: "Cukraszdatidemostpls",
        email: "anna@freemail.com",
        role: "user"
    },
    {
        username: "Valamelyik Dani",
        password: "EgyNagySenkiMintMindenkiMás",
        email: "daniel@freemail.hu",
        role: "user"
    },
    {
        username: "Heni",
        password: "EgyNagySenkiMintMindenkiMás",
        email: "igen@gmail.hu",
        role: "user"
    },{
        username: "Pisti",
        password: "nemPisike",
        email: "pistike2002@freemail.hu",
        role: "user"
    },
    {
        username: "Anna",
        password: "Cukraszdatidemostpls",
        email: "anna@freemail.com",
        role: "user"
    },
    {
        username: "Valamelyik Dani",
        password: "EgyNagySenkiMintMindenkiMás",
        email: "daniel@freemail.hu",
        role: "user"
    },
    {
        username: "Heni",
        password: "EgyNagySenkiMintMindenkiMás",
        email: "igen@gmail.hu",
        role: "user"
    },{
        username: "Pisti",
        password: "nemPisike",
        email: "pistike2002@freemail.hu",
        role: "user"
    },
    {
        username: "Anna",
        password: "Cukraszdatidemostpls",
        email: "anna@freemail.com",
        role: "user"
    },
    {
        username: "Valamelyik Dani",
        password: "EgyNagySenkiMintMindenkiMás",
        email: "daniel@freemail.hu",
        role: "user"
    },
    {
        username: "Heni",
        password: "EgyNagySenkiMintMindenkiMás",
        email: "igen@gmail.hu",
        role: "user"
    }
]


const testDataPost = [
    {
        postID: 0,
        author: "Twilight Sparkle",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhflksflk sfkjflksdf etőleg működni fog, hehe",
        published: true
    },{
        postID: 1,
        author: "Pinkie Pie",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhetőleg  adkjjfogjdfoigjoidfjg gfdjgijdfogjoidfj gdogjodfjgoijdműködni fog, hehe",
        published: true
    },{
        postID: 2,
        author: "Rarity",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy cso jó. Ez szarul fog kinézni, de remélhetőleg működni fog, hehe",
        published: true
    },{
        postID: 3,
        author: "Fluttershy",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul foélhetőleg működni fog, hehe",
        published: false
    },{
        postID: 4,
        author: "Rainbow Dash",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhetőleg működni fog, hehe",
        published: true
    },{
        postID: 5,
        author: "Princesss Luna",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez sza működni fog, hehe",
        published: true
    },{
        postID: 6,
        author: "Princess Celestia",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhflksflk sfkjflksdf etőleg működni fog, hehe",
        published: true
    },{
        postID:7,
        author: "Spike",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhetőleg  adkjjfogjdfoigjoidfjg gfdjgijdfogjoidfj gdogjodfjgoijdműködni fog, hehe",
        published: true
    },{
        postID:8,
        author: "Derpy Hooves",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy cso jó. Ez szarul fog kinézni, de remélhetőleg működni fog, hehe",
        published: true
    },{
        postID:9,
        author: "Apple Bloom",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul foélhetőleg működni fog, hehe",
        published: false
    },{
        postID: 10,
        author: "Sweetie Belle",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhetőleg működni fog, hehe",
        published: true
    },{
        postID: 11,
        author: "Scootaloo",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez sza működni fog, hehe",
        published: true
    },{
        postID: 12,
        author: "Shining Armor",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhflksflk sfkjflksdf etőleg működni fog, hehe",
        published: true
    },{
        postID: 13,
        author: "Big McIntosh",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhetőleg  adkjjfogjdfoigjoidfjg gfdjgijdfogjoidfj gdogjodfjgoijdműködni fog, hehe",
        published: true
    },{
        postID: 14,
        author: "Mrs. Cup Cake",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy cso jó. Ez szarul fog kinézni, de remélhetőleg működni fog, hehe",
        published: true
    },{
        postID: 15,
        author: "Trixie",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul foélhetőleg működni fog, hehe",
        published: false
    },{
        postID: 16,
        author: "Snips",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez szarul fog kinézni, de remélhetőleg működni fog, hehe",
        published: true
    },{
        postID: 17,
        author: "Pound Cake",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy csomó szöveget, bla bla bla meg dolgok tök jó. Ez sza működni fog, hehe",
        published: true
    },{
        postID: 18,
        author: "Gilda",
        date: "1976.08.03.",
        content: "Az alma nagyon finom ide pedig kell írnom egy cse remélhetőleg működni fog, hehe",
        published: true
    } 
]

export {
    testDataUsers,
    testDataPost
}