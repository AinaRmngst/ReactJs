import data from '../data/data.json'
function RandomNote(){
    const randomNote = data[Math.floor(Math.random)* data.length];

    return(
        <div>
            <h2>Note aléatoire</h2>
            <p>Étudiant : {randomNote.student.firstname} {randomNote.student.lastname}</p>
            <p>Cours : {randomNote.course}</p>
            <p>Note : {randomNote.grade}</p>
            <p>Date : {randomNote.date}</p>
        </div>
    );
}

export default RandomNote;