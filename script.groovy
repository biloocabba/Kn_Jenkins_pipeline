def buildApp() {
    echo 'building the application'
    
    echo 'The app is buileded now be happy!'
    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash'
    sh '. ~/.nvm/nvm.sh'
    sh 'node  install  14.18.1'
 
}

def testApp() {
    echo 'Testing  the application'
    
}

def deployApp() {
    echo 'Testing  the application oj Kenkins server'
    //echo "deploying version ${params.VERSION}"
}

return this 
