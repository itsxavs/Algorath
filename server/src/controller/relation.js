const pool  = require('../database')

const getRelation = async (req, res) => {
    const response = await pool.query('SELECT * FROM Relation_user');
    res.status(200).json(response.rows);
};

const createRelation = async (req, res) => {
    const { user1, user2 } = req.body;
    const response = await pool.query('INSERT INTO Relation_user (user1, user2) VALUES ($1, $2)', [user1, user2]);
    res.json({
        message: 'Relation Added successfully',
        body: {
            user: {user1, user2}
        }
    })
};

module.exports = {
    getRelation,
    createRelation
};