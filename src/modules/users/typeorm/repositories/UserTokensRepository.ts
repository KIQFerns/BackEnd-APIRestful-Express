import { EntityRepository, Repository } from "typeorm";
import UserToken from "../entities/User";

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<User> {
  public async findByToken(token: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { token } });

    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { id } });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } });

    return user;
  }
}

export default UserTokensRepository;
