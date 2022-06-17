const knex = require('../database/database');

exports.TodosAll = async (req, res) => {
  knex
    .select('*') 
    .from('TODOS')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error: ${err}` })
    })
}

exports.todoCreate = async (req, res) => {
  knex('TODOS')
    .insert({
      'username': req.body.username,
      'title': req.body.title,
			'description': req.body.description,
      'createdAt': req.body.createdAt
    })
    .then(() => {
      res.json({ message: `Todo \'${req.body.title}\' created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating ${req.body.title} todo: ${err}` })
    })
}

exports.todoDelete = async (req, res) => {
  knex('TODOS')
    .where('id', req.body.id) 
    .del() 
    .then(() => {
      res.json({ message: `Todo ${req.body.id} deleted.` })
    })
    .catch(err => {
      res.json({ message: `There was an error deleting ${req.body.id} todo: ${err}` })
    })
}

exports.todoTitleUpdate = async (req, res) => {
	const {id, title} = req.body;
			const subQuery = knex('TODOS').select('id').where({id})
			subQuery.then( response => {
				if(response.length > 0) {
					subQuery.update({title})
					.then(res => {
							res.json('update done')
						})
					.catch(err=>{res.json(err)})
			}
				else {
					res.json('update failed')
			}
	})
}

exports.todoDescriptionUpdate = async (req, res) => {
	const {id, description} = req.body;
			const subQuery = knex('TODOS').select('id').where({id})
			subQuery.then(subQuery.update({description})
					.then(res => {
							res.json('update done')
						})
					.catch(err=>{res.json(err)})
	)
}