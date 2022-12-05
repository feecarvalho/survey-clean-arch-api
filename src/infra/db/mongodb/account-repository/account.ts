import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

type MongoFindAccountResult = Omit<AccountModel, 'id'>

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const findResult = await accountCollection.findOne({ _id: result.insertedId }) as unknown as MongoFindAccountResult
    return Object.assign({}, findResult, { id: result.insertedId.toString() })
  }
}
