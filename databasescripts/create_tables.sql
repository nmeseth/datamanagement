ALTER SESSION SET CURRENT_SCHEMA = student;


CREATE TABLE STUDENT.PRODUCT
(
  ID INTEGER NOT NULL
, NAME NVARCHAR2(100) NOT NULL
, BOTTLE_SIZE_LITERS NUMBER
, BOTTLES_PER_PACKAGE INTEGER
, PRICE_PER_PACKAGE NUMBER
, AGE_RESTRICTION INTEGER
, ALCOHOL_PERCENT NUMBER
, PRODUCT_CATEGORY INTEGER
, CONSTRAINT PRODUCT_PK PRIMARY KEY
  (
    ID
  )
  ENABLE
);

CREATE TABLE STUDENT.PRODUCT_CATEGORY
(
  ID INTEGER NOT NULL
, PARENT_ID INTEGER
, NAME NVARCHAR2(100) NOT NULL
, DESCRIPTION NVARCHAR2(200)
, CONSTRAINT PRODUCT_CATEGORY_PK PRIMARY KEY
  (
    ID
  )
  ENABLE
);

CREATE TABLE STUDENT.CUSTOMER
(
  ID INTEGER NOT NULL
, NAME NVARCHAR2(100) NOT NULL
, CITY NVARCHAR2(50)
, PLZ NUMBER(5)
, STREET NVARCHAR2(50)
, NO NVARCHAR2(4)
, TYPE NVARCHAR2(20)
, RATING VARCHAR(1)
, CONSTRAINT CUSTOMER_PK PRIMARY KEY
  (
    ID
  )
  ENABLE
);

CREATE TABLE STUDENT.SALES
(
  CUSTOMER_ID INTEGER NOT NULL
, SALES_DATE DATE
, BILL_NO NVARCHAR2(8)
, DISCOUNT_PERCENT NUMBER
, CONSTRAINT SALES_PK PRIMARY KEY
  (
    CUSTOMER_ID, SALES_DATE
  )
  ENABLE
);
