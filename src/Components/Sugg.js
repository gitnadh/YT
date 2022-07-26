function Sugg() {
  return <div>suggession</div>;
}
export default Sugg;
export function Comments() {
  const tabComments = [
    {
      img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
    nom:'Flen el foulani',
    date:'il y un ans',desc:'Video '
    },
    {
        img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom:'Flen el foulani2',
      date:'il y un ans',desc:'Video '
      },
      {
        img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom:'Flen el foulani3',
      date:'il y un ans',desc:'Video '
      },
      {
        img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom:'Flen el foulani5',
      date:'il y un ans',desc:'Video '
      },
     
  ];
  return <div>
    {
  tabComments.map(
    (el,i)=><div key={i}>
        <img style={ {borderRadius:'50%' } } className='logo' src={el.img}/>
        <h2>{el.nom}</h2>
        <p>{el.date}</p>
        <p>{el.desc}</p>

    </div>
  )

    }
  </div>;
}
export function Footery() {
  return <div>footer</div>;
}
