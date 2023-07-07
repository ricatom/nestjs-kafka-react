import * as dotenv from 'dotenv'

const envFile = (): string => {
	return `.env`
}

dotenv.config({ path: envFile() })

export default {
	enviroment: process.env.NODE_ENV,
	postgres: {
		host: process.env.POSTGRESQL_HOST,
		port: Number(process.env.POSTGRESQL_PORT),
		user: process.env.POSTGRESQL_USER,
		password: process.env.POSTGRESQL_PASSWORD,
		db: process.env.POSTGRESQL_DB,
		synchronize: Boolean(process.env.POSTGRESQL_SYNCHRONIZE) || false
	},
	kafka: {
		topicOrder: process.env.KAFKA_TOPIC_ORDER
	}
}