CREATE TABLE public.orders (
	id serial4 NOT NULL,
	customer varchar NULL,
	status varchar(30) NULL,
	total numeric NULL,
	created_at date NULL,
	CONSTRAINT orders_pkey PRIMARY KEY (id)
);