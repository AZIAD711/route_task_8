import mongoose from 'mongoose'
 async function connectionOfDatabase() {
  try {
    const databaseUrl = "mongodb://localhost:27017/route_task_8"
    await mongoose.connect(databaseUrl,{
        maxPoolSize:10,
        serverSelectionTimeoutMS:4000
    })
    console.log(`✅ Database is Connected Scuuessfully `);
  } catch (error) {
    console.error(`❌ Database connection failed: ${error}`);
  }
};

export  {connectionOfDatabase};