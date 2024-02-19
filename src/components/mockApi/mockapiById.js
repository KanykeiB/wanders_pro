const mockApiData = [
    {
      id: 1,
      title: 'Ущелье Ала-Арча',
      state:'Чуйская область',
      shortDesc:'Ущелье Ала-Арча — это одна из самых знаменитых достопримечательностей Кыргызстана. Располагается ущелье Ала-Арча в Чуйской области, и является национальным парком.',
      coordinates:'42.565181, 74.482783',
      pictures:['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toomas-tartes-yizrl9n-eda-unsplash-1571336397.jpg?crop=0.601xw:0.899xh;0.340xw,0.101xh&resize=640:*','https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg', 'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?cs=srgb&dl=pexels-pixabay-210243.jpg&fm=jpg','https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW4lMjBoaWtlfGVufDB8fDB8fHww'],
      type:['Горы','Пикник', 'Походы', 'Семейный отдых'],
      getting_there: [
        {
            "title": "Велосипед",
            "travel_time": "5 часов",
            "price_travel": "Бесплатно",
            "description": "Крути педали НЕГР"
        },
        {
          "title": "Маршрутка",
          "travel_time": "1,5 часов",
          "price_travel": "50 сом",
          "description": "Можно добраться на 265 маршрутке, которая ходит в течении дня с Ошского рынка (нужно уточнять, идет ли она до заповедника или нет)."
      },
      {
        "title": "Машина",
        "travel_time": "1 час",
        "price_travel": "200сом",
        "description": "Машина "
    }
    ],
      description: 'Располагается ущелье Ала-Арча в Чуйской области, и является национальным парком. Ежегодно это высокогорное ущелье принимает сотни тысяч туристов, как местных, так и иностранных. Причин такой популярности несколько. Во-первых, ущелье Ала-Арча находится всего в 30 километрах от Бишкека, потому сюда легко добраться и есть вся необходимая туристическая инфраструктура: хорошая асфальтированная дорога, магазины, гостиницы, кафе, и места для отдыха среди живописной природы.Во-вторых, ущелье Ала-Арча имеет свои географические особенности — оно находится на центральной и высочайшей части Кыргызского хребта — второго по длине хребта Тянь-Шаня. Потому именно здесь горы вздымаются максимально высоко над равниной, и здесь же начинаются многочисленные тропы на высочайшие пики Кыргызского хребта.Ала-Арча знаменита своей нетронутой природой: обширными еловыми лесами, березовыми рощами, многочисленными родниками с чистой ледниковой водой и могучими скалами.',
      howToReach: 'На территории ущелья располагается национальный парк, поэтому вход или въезд на его территорию является платным.Можно добраться на 265 маршрутке, которая ходит в течении дня с Ошского рынка (нужно уточнять, идет ли она до заповедника или нет).',
      price: '50 сом',
      time: '1,5 часа',
      place: 'Ала-Арчинский альплагерь',
      additionalDescription: 'В ущелье Ала-Арча расположено большое количество маршрутов для хайкинга, треккинга, альпинизма и скалолазания. Именно поэтому здесь располагается всемирно известный ала-арчинский альплагерь, основанный, без малого, почти 70 лет назад. Ежегодно отсюда совершается множество восхождений на горные пики Тянь-Шаня, такие как пики Корона, Адыгене, Комсомолец, Учитель, Пионер, Свободная Корея, Бокс и наконец, высочайшую точку Кыргызского хребта, пик Семенова-Тян-Шанского (4876 м).Можно добраться на 265 маршрутке, которая ходит в течении дня с Ошского рынка (нужно уточнять, идет ли она до заповедника или нет).',
      transoprt: ['Маршрутка', 'Велосипед', 'Машина']
    }
  ];
  
  export default mockApiData;