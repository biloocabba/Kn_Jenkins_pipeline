pipeline {
    agent any
    stages {
        stage("build") {
            steps {
              echo 'building the application'
              sh '/usr/bin/npm install'

            }
        
        }
        stage("test") {
            steps {
              echo 'testting the application'
           

            }
        
        }
        stage("Deploy") {
            steps {
              echo 'Deploy the app'

            }
        
        }

    } 
}
