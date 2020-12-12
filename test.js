a = [
    {
      _id: 5fd3a96a9d180b29d41a91e5,
      name: '7ae8dab7f8c0a1dc5bbd4fd1c0c72a25090a91b3.png',
      time: '0H-16M-26S-2020-11-12',
      des: 'ảnh cháu gái'
    },
    {
      _id: 5fd3aa2d085bd10d9085678d,
      name: '6317fc112551cd27a312d1f6bae0c070b95b16ca.png',
      time: '0H-19M-41S-2020-11-12',
      des: 'ảnh kindle'
    }
  ]
a.forEach(element => {
    element.user = "xxx"
});
console.log(a)