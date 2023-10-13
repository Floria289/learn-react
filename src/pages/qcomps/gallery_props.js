function Profile({ person, imgId }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imgId}
        alt={person.name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awardNum}</b>
          {person.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {person.discover}
        </li>
      </ul>
    </div>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Skłodowska-Curie",
          profession: "physicist and chemist",
          awardNum: "4",
          awards:
            " (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,Matteucci Medal)",
          discover: "polonium (element)",
        }}
        imgId={"https://i.imgur.com/szV5sdGs.jpg"}
      />

      <Profile
        person={{
          name: "Katsuko Saruhashi",
          profession: "geochemist",
          awardNum: "2",
          awards: " (Miyake Prize for geochemistry, Tanaka Prize)",
          discover: "a method for measuring carbon dioxide in seawater",
        }}
        imgId={"https://i.imgur.com/YfeOqp2s.jpg"}
      />

      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src="https://i.imgur.com/szV5sdGs.jpg"
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src="https://i.imgur.com/YfeOqp2s.jpg"
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
