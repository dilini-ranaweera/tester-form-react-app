//creating AWS entity and configuring it
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: "",
  secretAccessKey: "",
  region: "us-east-2",
});

//instantiate rds entity
const rds = new AWS.RDS();
const dbInstanceIdentifier = "stutman-law-test-database";

// Specify the database details
const databaseName = "YOUR_DATABASE_NAME"; //this is what I do not have
const tableName = "YOUR_TABLE_NAME";

// Create a function to write an entry to the database
const writeEntryToDatabase = (entry) => {
  const params = {
    DBInstanceIdentifier: instanceIdentifier,
    Database: databaseName,
    Sql: `INSERT INTO ${tableName} (column1, column2) VALUES ('${entry.column1Value}', '${entry.column2Value}')`, //need to update with proper table params
  };

  rds.executeSql(params, (err, data) => {
    if (err) {
      console.error("Error writing entry to database:", err);
    } else {
      console.log("Entry written to database successfully:", data);
    }
  });
};

// Usage: Call the writeEntryToDatabase function with the entry data
const entryData = {
  column1Value: "Value 1",
  column2Value: "Value 2",
};

writeEntryToDatabase(entryData);
