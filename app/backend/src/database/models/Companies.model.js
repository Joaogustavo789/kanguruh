const CompaniesModel = (sequelize, DataTypes) => {
  const Companies = sequelize.define("Companies", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    companieName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    urlImageCompanie: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: "companies",
  });

  return Companies;
};

module.exports = CompaniesModel;
