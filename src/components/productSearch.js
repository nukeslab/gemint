import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import   {InstantSearch,
SearchBox,
Hits,
Configure,
} from 'react-instantsearch-dom';

const searchClient = algoliasearch('Y609OX67VAO', 'a45ba7a230d2dc139f1311d59f8bc56a');

const Hit = ({hit}) => 
    <div className="hit">
        <div className="hit-name">
            <h1>{hit.name}</h1>
            <button>Add</button>
        </div>
    </div>

const Content = () => 
    <div className="content">
        <Hits hitComponent={Hit} />
    </div>

class ProductSearch  extends Component {  
    
      render(){
        return (
            <InstantSearch
            searchClient={searchClient}
            indexName="products"
          >
          <header>
              <SearchBox translations={{placeholder:"Search for a product"}} />
          </header>
            <main>
                <Content />
            </main>
          </InstantSearch>
        
          );

      }
       
}
export default ProductSearch;