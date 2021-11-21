def buildApp() {
    echo 'building the application'
    
    echo 'The app is buileded now be happy!'
    
    sh 'node -v'
    sh'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash'
    sh 'source ~/.nvm/nvm.sh'
    sh 'export NVM_DIR="$HOME/.nvm'
    sh '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm'
    sh 'nvm install 14.18.1'
    //sh 'npm install '
    //sh 'npm  start'
 
}

def testApp() {
    echo 'Testing  the application'
    
}

def deployApp() {
    echo 'Testing  the application oj Kenkins server'
    //echo "deploying version ${params.VERSION}"
}

return this 
