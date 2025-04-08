function MainContent({note}){
    return(
      <main>
        <h2>Note aléatoire</h2>
      <p>Étudiant : {note.student.firstname} {note.student.lastname}</p>
      <p>Cours : {note.course}</p>
      <p>Note : {note.grade}</p>
      <p>Date : {note.date}</p>
      </main>
    )
  }

  export default MainContent;