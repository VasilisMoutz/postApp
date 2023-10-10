const CategoryEntity = require('../model/Category').CategoryEntity;
const dataSource = require('../connect').dataSource;

function create(name) {

    console.log("Service Category Create", name);

    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .insert()
        .into(CategoryEntity)
        .values([ {name: name} ])
        .execute()
        .catch(error => console.log(error));

        return result;
}

function findAll() {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .select('category')
        .from(CategoryEntity, 'category')
        .getMany()

    return result;
}

function findOne(value) {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .select('category')
        .from(CategoryEntity, 'category')
        .where('category.id = :x', { x: value })
        .getOne()

    return result;
}

function update(data) {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .update(CategoryEntity)
        .set({name: data.name})
        .where('id = :id', {id: data.id})
        .execute()
        .catch(error => console.log(error));

        return result;
}

function deleteCategory(id) {
    const result = dataSource
        .getRepository(CategoryEntity)
        .createQueryBuilder()
        .delete()
        .from (CategoryEntity)
        .where('id = :id', {id: id})
        .execute()
        .catch(error => console.log(error));

    return result;
}

module.exports = { create, findAll, update, findOne, deleteCategory };
