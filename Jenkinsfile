def gv
pipeline {
    agent any
    tools {
        nodejs "NodeJs"
    }
    //parameters {
        //choice(name: 'VERSION', choices ['1.1.0', '1.1.0', '1.3.0'], description: '')
        //booleanParam(name: 'executeTests', defaultValue: true, description: '')
    //}
    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }

            }

        }
        stage("build") {
            steps {
                script {
                    gv.buildApp()
                }

            }

        }
        stage("Test") {
            steps {
                script {
                    gv.testApp()
                }

            }
            
        }
        stage("Deploy") {
            steps {
                script {
                    gv.deployApp()
                }

            }
            
        }

    } 

}
