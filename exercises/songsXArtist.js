// songsXArtist
// En este ejercicio deberás establecer una relación entre dos modelos.
// La instancia de sequelize que recibe la función tiene definidos dos modelos: Song y Artist
// Debes establecer entre ellos una relación de uno a varios, con la siguiente lógica:
// Un artista (Artist) puede tener varias canciones (Song)
// Una canción (Song) pertenece a un solo artista (Artist)

// ⚠️ Los modelos YA ESTÁN DEFINIDOS en la instancia de Sequelize que recibe la función. No debes definirlos
// ⚠️ No es necesario que tu función retorne ningún output

// Documentación con la que puedes guiarte: https://sequelize.org/docs/v6/core-concepts/assocs/

module.exports = (sequelize) => {
  // Tu código aquí...

  const { Artist, Song } = sequelize.models;

  Artist.hasMany(Song, { foreignKey: 'SongId', allowNull: false });
  Song.belongsTo(Artist, { foreignKey: 'artistId', allowNull: false });


};
