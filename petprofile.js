module.exports = function(sequelize, DataTypes) {
    var petProfile = sequelize.define("petProfile", {
      Pet_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      Age: {
        type: DataTypes.STRING,
        alllowerNull: false,
        
      },
      Breed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Bio: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Temp: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    },
    Act: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
    }
    });
    return petProfile;
  };
  