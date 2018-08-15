Demonstrates use of

1. SpringBoot
2. Spring Data
3. Hibernate
4. Informix

Sourced from: 

1. https://spring.io/guides/tutorials/react-and-spring-data-rest/
2. https://www.mkyong.com/spring-boot/spring-boot-spring-data-jpa-oracle-example/

Supporting Material:
1. https://spring.io/guides/gs/accessing-data-rest/
2. https://vladmihalcea.com/the-best-way-to-map-a-composite-primary-key-with-jpa-and-hibernate/


Uses default Tomcat JDBC Connection Pool


Exercising the Code:

To test the APIs:
1. http://localhost:8080/api/businessEntities/19981215793

Returns:
{
  "entityName" : "HOPE LUTHERAN CHURCH",
  "entityType" : "DNC         ",
  "_links" : {
    "self" : {
      "href" : "http://localhost:8080/api/businessEntities/19871130096"
    },
    "businessEntity" : {
      "href" : "http://localhost:8080/api/businessEntities/19871130096"
    }
  }
}

2. http://localhost:8080/api/businessEntities/search   - identify all custom queries.

Following are queries defined in BusinessEntityRepository

{
  "_links" : {
    "findByEntityIdReturnStream" : {
      "href" : "http://localhost:8080/api/businessEntities/search/findByEntityIdReturnStream{?entityId}",
      "templated" : true
    },
    "findByEntityName" : {
      "href" : "http://localhost:8080/api/businessEntities/search/findByEntityName"
    },
    "findByPartialEntityName" : {
      "href" : "http://localhost:8080/api/businessEntities/search/findByPartialEntityName{?entityName}",
      "templated" : true
    },
    "self" : {
      "href" : "http://localhost:8080/api/businessEntities/search"
    }
  }
}


3. http://localhost:8080/api/businessEntities/search/findByPartialEntityName?entityName=Hope

{
  "_embedded" : {
    "businessEntities" : [ {
      "entityName" : "Greeley Assembly of God DBA New Hope Christian Fellowship",
      "entityType" : "DNC         ",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/businessEntities/19871239542"
        },
        "businessEntity" : {
          "href" : "http://localhost:8080/api/businessEntities/19871239542"
        }
      }
    }, {
      "entityName" : "New Hope Community Church of Golden",
      "entityType" : "DNC         ",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/businessEntities/19871340400"
        },
        "businessEntity" : {
          "href" : "http://localhost:8080/api/businessEntities/19871340400"
        }
      }
    }, {
      "entityName" : "Hope For Children, Inc.",
      "entityType" : "DNC         ",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/businessEntities/19971009577"
        },
        "businessEntity" : {
          "href" : "http://localhost:8080/api/businessEntities/19971009577"
        }
      }
    }, {
      "entityName" : "Eternal Hope Equestrian Centre, LLC",
      "entityType" : "DLLC        ",
      "_links" : {
        "self" : {
          "href" : "http://localhost:8080/api/businessEntities/19991009106"
        },
        "businessEntity" : {
          "href" : "http://localhost:8080/api/businessEntities/19991009106"
        }
      }
    }, {
    
    
    

