const companyModel = require('../model/company.model')

module.exports.order = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let { item_name, cost, order_date, delivery_date,order_id } = body;
            let data = {
                item_name: item_name,
                cost: cost,
                order_date: order_date,
                delivery_date:delivery_date,
                order_id:order_id
            }
            let checkOrder = await companyModel.findOne({
            where:{
                order_id:order_id
            }
            })
            if(checkOrder){
                resolve({
                    status: false,
                    statusCode: 409,
                    message:'This order alredy exist.'
                })
            }else{
                await companyModel.create({
                    item_name: item_name,
                    cost: cost,
                    order_date: order_date,
                    delivery_date:delivery_date,
                    order_id:order_id
                })
                resolve({
                    status: true,
                    statusCode: 200,
                    message: 'order successfully....'
                })
            }
        } catch (err) {
            console.log(err);
        }
    })
}

module.exports.update = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { order_id, delivery_date } = body;
            const checkOrderId = await companyModel.findOne({
                where: { order_id: order_id },
                attributes:['order_id'],
            })
            console.log(checkOrderId);
            if (!checkOrderId) {
                resolve({
                    status: false,
                    statusCode: 409,
                    message: 'Order not found......'
                })
            } else {
                   let updateOrder = await companyModel.update({delivery_date: delivery_date},
                  {
                    where: { order_id: order_id },
                  })
                if (updateOrder) {
                    resolve({
                        status: true,
                        statusCode: 200,
                        message: 'order update successfully....'
                    })
                } else {
                    resolve({
                        status: false,
                        statusCode: 409,
                        message: 'order not update'
                    })
                }

            }
        } catch (err) {
            console.log(err);
        }
    })
}

module.exports.list = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { delivery_date } = params;
            let newParams = {}
            if(delivery_date){
            newParams.delivery_date = delivery_date}
            const getList = await companyModel.findAll({
                    where:newParams,
                    attributes:['order_id','item_name','cost','order_date','delivery_date'],
            })

            
            if (getList.length ) {
                resolve({
                    status:true,
                    statusCode:200,
                    data:getList
                })
            }
            else {
                resolve({
                    status: false,
                    statusCode: 409,
                    message: 'Data not found....'
                })
            }
        } catch (err) {
            console.log(err);
        }
    })
}

module.exports.delete = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await companyModel.findOne({
                where:{order_id:params.order_id},
            })
            if (data) {
                console.log(data);
                await companyModel.destroy({ where:{order_id:data.order_id},})
                resolve({
                    status:true,
                    statusCode:200,
                    message: 'Order delete successfully...'
                })
            }
            else {
                resolve({
                    status: false,
                    statusCode: 409,
                    message: 'Data not found....'
                })
            }
        } catch (err) {
            console.log(err);
        }
    })
}

module.exports.searchList = (params) => {
    return new Promise(async (resolve, reject) => {
        try {
            let order_id = params.order_id ? params.order_id : "";          
            const getList = await companyModel.findAll({
                    where: { order_id: order_id },
                    attributes:['order_id','item_name','cost','order_date','delivery_date'],
            })
            if (getList.length) {
                resolve({
                    status:true,
                    statusCode:200,
                    data:getList
                })
            }
            else {
                resolve({
                    status: false,
                    statusCode: 409,
                    message: 'Data not found....'
                })
            }
        } catch (err) {
            console.log(err);
        }
    })
}




