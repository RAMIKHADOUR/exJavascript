window.onload = async function(){
 
  const url = "https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?limit=25&offset=0";
  let footer = document.querySelector("footer div");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

 data.records.forEach(element => 
 footer.textContent += "nom commune : " + element.record.fields.nom_commune +
  "nom établissement : " + element.record.fields.nom_etablissement +
  "mail de l'etablissement : " + element.record.fields.mail);
  
 
}

