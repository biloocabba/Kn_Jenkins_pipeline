pipeline {
    agent any
    stages {
        stage("build") {
            steps {
              echo 'building the application'
              sh 'curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash'
              sh '. ~/.nvm/nvm.sh'
              sh 'sudo apt install nodejs '
              sh 'sudo nvm install 14.8.1'
              sh 'sudo node -v'

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
