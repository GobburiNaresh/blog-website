// import mongoose from 'mongoose';

// const Connection = async () => {
//     const URL = `mongodb+srv://naresh:NARESH@services.d2ri7ed.mongodb.net/`;
//     try {
//         await mongoose.connect(URL, { useNewUrlParser: true })
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.log('Error while connecting to the database ', error);
//     }
// };

// export default Connection;



import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mongodb+srv://naresh:NARESH@services.d2ri7ed.mongodb.net/`;

    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            createIndex: true,
            useFindAndModify: false,
        });

        mongoose.connection.on('connected', () => {
            console.log('Connected to the database');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Error in database connection:', err);
        });
    } catch (error) {
        console.error('Error while connecting to the database:', error.message);
    }
};

export default Connection;
